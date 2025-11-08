import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FaXmark } from "react-icons/fa6";
import { addWidget } from "../store/slices/dashboardSlice";

const AddWidgetModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleAdd = useCallback(() => {
    if (!name.trim() || !text.trim()) return;
    const newWidget = { id: crypto.randomUUID(), name, text, active: true };
    dispatch(
      addWidget({
        categoryId: Number.parseInt(selectedCategory),
        widget: newWidget,
      })
    );
    handleClose();
  }, [name, text, selectedCategory, dispatch, handleClose]);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div className="AddWidgetModalContainer">
      <div className="AddWidgetModal">
        <div className="AddWidgetModalHeader">
          <span className="AddWidgetModalHeaderText">Add Widget</span>
          <button onClick={handleClose} className="AddWidgetModalCloseButton">
            <FaXmark />
          </button>
        </div>

        <div className="AddWidgetModalForm">
          <input
            name="WidgetName"
            className="AddWidgetModalFormInput"
            value={name}
            onChange={handleNameChange}
          />
          <textarea
            name="WidgetTextArea"
            className="AddWidgetModalFormTextArea"
            value={text}
            onChange={handleTextChange}
          />
          <select
            name="WidgetCategory"
            className="AddWidgetModalFormSelect"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="AddWidgetModalButtons">
            <button
              className="AddWidgetModalFormButton AddWidgetModalFormButtonCancel"
              onClick={handleClose}
            >
              cancel
            </button>
            <button
              className="AddWidgetModalFormButton AddWidgetModalFormButtonSubmit "
              onClick={handleAdd}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AddWidgetModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddWidgetModal;
