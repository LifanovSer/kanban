import React, { useState } from "react";
import styleHeader from "./HeaderColumn.module.css";
import Edit from "@img/edit.svg?react";
import Trash from "@img/trash.svg?react";
import { HeaderColumnProps } from "./HeaderColumnTypes";

export const HeaderColumn: React.FC<HeaderColumnProps> = ({
  type,
  img,
  id,
  handleRemoveColumn,
  handleEditTitleColumn,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(type);

  const handleSave = () => {
    handleEditTitleColumn(id, newTitle);
    setIsEditing(false);
  };
  return (
    <div className={styleHeader["header-column"]}>
      <div className={styleHeader["wrapper-type"]}>
        <img
          src={img}
          className={styleHeader["picture-type"]}
          alt="column picture"
        />
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") setIsEditing(false);
            }}
            autoFocus
            className={styleHeader["edit-input"]}
          />
        ) : (
          <span className={styleHeader["name-type"]}>{type}</span>
        )}
      </div>
      <div className={styleHeader["wrapper-buttons"]}>
        <button className={styleHeader["change-button"]}>
          <Edit  onClick={() => setIsEditing(true)} className={styleHeader["svg-picture"]} />
        </button>
        <button
          onClick={() => handleRemoveColumn(id)}
          className={styleHeader["change-button"]}
        >
          <Trash className={styleHeader["svg-picture"]} />
        </button>
      </div>
    </div>
  );
};

// switch (type) {
//   case "base":
//     return (
//       <div className={styleType["wrapper-type"]}>
//         {/* <Base className={styleType["picture-type"]} />{" "} */}
//         <img src={img} className={styleType["picture-type"]} alt="" />
//         <span className={styleType["name-type"]}>{type}</span>
//       </div>
//     );
//   case "works":
//     return (
//       <div className={styleType["wrapper-type"]}>
//         {/* <BlueButtonPlay className={styleType["picture-type"]} />{" "} */}
//         <img src={img} className={styleType["picture-type"]} alt="" />
//         <span className={styleType["name-type"]}>{type}</span>{" "}
//       </div>
//     );
//   case "completed":
//     return (
//       <div className={styleType["wrapper-type"]}>
//         {/* <Completed className={styleType["picture-type"]} />{" "} */}
//         <img src={img} className={styleType["picture-type"]} alt="" />
//         <span className={styleType["name-type"]}>{type}</span>
//       </div>
//     );
//   case "passed":
//     return (
//       <div className={styleType["wrapper-type"]}>
//         {/* <Passed className={styleType["picture-type"]} />{" "} */}
//         <img src={img} className={styleType["picture-type"]} alt="" />
//         <span className={styleType["name-type"]}>{type}</span>
//       </div>
//     );
// }
