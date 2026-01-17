import { PiShootingStarDuotone } from "react-icons/pi";
import { LuLink } from "react-icons/lu";
import { PiScissorsFill } from "react-icons/pi";
import { Box } from "./box";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const Body = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-select short URL when it appears
  useEffect(() => {
    if (shortUrl && inputRef.current) {
      inputRef.current.select();
    }
  }, [shortUrl]);

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      setErr("Please enter a valid URL");
      return;
    }

    try {
      setLoading(true);
      setErr("");

      const res = await axios.post(
        "http://localhost:3000/api/create",
        { full_url: longUrl },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    
      setShortUrl(res.data.newShortUrl);
    } catch (err: any) {
      setErr(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
    console.log("STATE → longUrl:", longUrl);
    console.log("STATE → shortUrl:", shortUrl);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast.success("Short URL copied to clipboard 🚀");
    } catch {
      toast.error("Failed to copy URL");
    }
  };

  const handleReset = () => {
    setLongUrl("");
    setShortUrl("");
    setErr("");
  };

  return (
    <div className="mt-10 mx-10">
      {/* Badge */}
      <div className="flex justify-center py-10">
        <div className="flex bg-gray-300 text-indigo-600 px-3 py-1 rounded-2xl">
          <PiShootingStarDuotone className="h-5 mt-1" />
          <div>Simple. Fast. Secure.</div>
        </div>
      </div>

      {/* Heading */}
      <div className="flex justify-center text-4xl md:text-6xl font-extrabold pb-5">
        Shorten Your Link
      </div>

      <div className="flex justify-center text-gray-500 text-center px-4">
        Transform long, ugly URLs into short, shareable links. Track clicks and
        optimize your marketing campaigns.
      </div>

      {/* Input Card */}
      <div className="flex justify-center shadow-lg mx-4 sm:mx-10 rounded-2xl mt-10 border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-3 py-4 w-full max-w-xl">
          <div className="flex items-center w-full px-4 gap-3 text-gray-700 py-5 rounded-2xl border border-gray-200">
            <LuLink className="flex-shrink-0 text-lg" />
            <input
              ref={inputRef}
              type="text"
              value={shortUrl || longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Paste your long URL here..."
              className="flex-1 bg-transparent outline-none"
              readOnly={!!shortUrl}
            />
          </div>

          <button
            onClick={shortUrl ? handleCopy : handleShorten}
            disabled={loading}
            className="flex justify-center items-center px-6 py-5 gap-2 bg-purple-400 text-white rounded-2xl w-full sm:w-auto"
          >
            {shortUrl ? (
              <>
                <LuLink />
                <span>Copy URL</span>
              </>
            ) : (
              <>
                <PiScissorsFill />
                <span>{loading ? "Shortening..." : "Shorten"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error */}
      {err && (
        <p className="text-center text-red-500 mt-3">
          {err}
        </p>
      )}

      {/* Reset */}
      {shortUrl && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleReset}
            className="text-indigo-600 underline text-sm"
          >
            Shorten another URL
          </button>
        </div>
      )}

      {/* Feature Cards */}
      <div className="flex justify-center mt-20 gap-6">
        <Box
          heading="Instant Shortening"
          description="Our service is lightning fast. Paste your link and get a short URL in milliseconds."
        />
        <Box
          heading="Reliable Redirects"
          description="We ensure your visitors always land on the correct destination page without delays."
        />
      </div>
    </div>
  );
};
