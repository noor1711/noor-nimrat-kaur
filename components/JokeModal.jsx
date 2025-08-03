"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PixelArt } from "./pixel-art";

const JokeModal = ({ showJoke, closeJoke }) => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    var baseURL = "https://v2.jokeapi.dev";
    var categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
    var params = ["blacklistFlags=nsfw,religious,racist", "idRange=0-100"];

    setIsLoading(true);
    setError(null);
    setJoke(null);
    try {
      const response = await fetch(
        baseURL +
          "/joke/" +
          categories.join(",") +
          "?" +
          params.join("&") +
          "&type=single"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch joke.");
      }
      setJoke(data.joke);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showJoke) {
      fetchJoke();
    } else {
      setJoke(null);
      closeJoke();
      setError(null);
    }
  }, [showJoke]);

  const handleOpenChange = (open) => {
    if (!open) {
      closeJoke();
      setJoke(null);
      setError(null);
    }
  };

  return (
    <Dialog open={showJoke && !!joke} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] border-4 border-blue-600 bg-white font-mono">
        <DialogHeader>
          <DialogTitle className="text-blue-800 flex items-center">
            <PixelArt type="bunny" size="sm" className="mr-2" />
          </DialogTitle>
          <DialogDescription className="text-xl text-black-800 whitespace-pre-line">
            Here's a joke to brighten your day.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isLoading && (
            <p className="text-center text-blue-700 flex items-center justify-center">
              <PixelArt type="cloud" size="sm" className="mr-2 animate-pulse" />
              Loading joke...
            </p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}
          {joke && (
            <p className="text-lg text-gray-800 whitespace-pre-line">{joke}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JokeModal;
