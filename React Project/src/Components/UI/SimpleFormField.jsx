import React from "react";
import Form from "react-bootstrap/Form";

const SimpleFormField = ({
  fieldItem,
  labelTxt,
  inputType,
  placeholder,
  controlId,
  labelIcon,
  labelCls,
  inputCls,
  groupCls,
  inputValue,
  handleInputChange,
}) => {
  return (
    <Form.Group dir="rtl" className={groupCls} controlId={controlId}>
      <Form.Label className={`${labelCls} d-flex gap-1 justify-content-center`}>
        {labelTxt}
        {labelIcon}
      </Form.Label>
      {inputType === "select" ? (
        <Form.Control
          as="select"
          className={inputCls}
          value={inputValue}
          required={fieldItem?.required}
          onChange={(e) =>
            handleInputChange(e.target.value, fieldItem?.servSign)
          }
        >
          <option selected disabled>
            בחר
          </option>
          {fieldItem?.selectArr?.map((option, index) => (
            <option key={index} defaultValue={option}>
              {option}
            </option>
          ))}
        </Form.Control>
      ) : (
        <Form.Control
          className={inputCls}
          type={inputType}
          value={inputValue}
          required={fieldItem?.required}
          defaultValue={fieldItem?.defaultValue ? fieldItem?.defaultValue : ``}
          placeholder={placeholder}
          onChange={(e) =>
            handleInputChange(e.target.value, fieldItem?.servSign)
          }
        />
      )}
    </Form.Group>
  );
};

export default SimpleFormField;
