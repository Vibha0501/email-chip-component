/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

interface ChipProps {
  label: string;
  onDelete: (label: string) => void;
  photoId: string;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete, photoId }) => {
  const placeholderImage = `https://placekitten.com/50/50?image=${photoId}`; // Placeholder image with photoId

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "#f0f0f0",
        padding: "6px 10px",
        borderRadius: "20px",
        margin: "4px",
        fontSize: "14px",
      }}
    >
      <img
        src={placeholderImage}
        alt={`${label}'s Photo`}
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          marginRight: "8px",
        }}
      />
      {label}
      <span
        style={{
          marginLeft: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => onDelete(label)}
      >
        ×
      </span>
    </div>
  );
};

export default Chip;