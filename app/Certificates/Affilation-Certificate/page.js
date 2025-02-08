"use client"
import { useState } from "react";
import PopupNotification from "@/components/PopUp";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="p-8">
      <button
        onClick={() => setShowPopup(true)}
        className="bg-[#2F5233] text-white px-4 py-2 rounded-lg"
      >
        Show Notification
      </button>

      {showPopup && (
        <PopupNotification
          message="School will be closed on Monday due to weather conditions."
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
