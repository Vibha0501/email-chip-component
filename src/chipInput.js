import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import Chip from "./Chip.tsx";

const ChipInput = ({ availableItems }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedChips, setSelectedChips] = useState([]);
  const [highlightedChip, setHighlightedChip] = useState(null);
  const [isListVisible, setListVisibility] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setHighlightedChip(null);
  };

  const handleItemClick = (item) => {
    setSelectedChips([...selectedChips, item.name]);
    setInputValue("");
    setListVisibility(false);
  };

  const handleChipDelete = (chip) => {
    const updatedChips = selectedChips.filter((name) => name !== chip);
    setSelectedChips(updatedChips);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      inputValue === "" &&
      selectedChips.length > 0
    ) {
      setHighlightedChip(selectedChips[selectedChips.length - 1]);
    }
  };

  const handleKeyUp = (e) => {
    if (
      e.key === "Backspace" &&
      inputValue === "" &&
      highlightedChip !== null
    ) {
      const updatedChips = selectedChips.filter(
        (name) => name !== highlightedChip
      );
      setSelectedChips(updatedChips);
      setHighlightedChip(null);
    }
  };

  useEffect(() => {
    if (highlightedChip !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [highlightedChip]);

  const filteredItems = availableItems.filter(
    (item) =>
      !selectedChips.includes(item.name) &&
      (item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.email.toLowerCase().includes(inputValue.toLowerCase()))
  );

  return (
    <div className="m-3">
      <div className="d-flex flex-wrap mt-2 mx-auto w-50">
        {selectedChips.map((chip) => (
          <Chip key={chip} label={chip} onDelete={handleChipDelete} />
        ))}
      </div>
      <div className="position-relative m-2 mx-auto w-50">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          placeholder="Type to search..."
          onClick={() => setListVisibility(true)}
          className="form-control border-0 border-bottom  border-primary"
        />
        {isListVisible && (
          <div
            className=" position-relative m-2 mx-auto overflow-auto border bg-white shadow"
            style={{ zIndex: 1, maxWidth:500,maxHeight: 250, top: "100%" }}
          >
            <table className="table table-hover align-content-start table-responsive">
              <tbody>
                {filteredItems.map((item) => (
                  <tr
                    key={item.name}
                    className="cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    <td>
                      <img
                        src={`https://placekitten.com/30/30?image=${item.id}`}
                        alt={`${item.name}'s Photo`}
                        className="rounded-circle"
                      />
                    </td>
                    <td style={{ textAlign: "left" }}>{item.name}</td>
                    <td style={{ textAlign: "left" }} className=" text-muted">
                      {item.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChipInput;