import React from "react";

type InputProps = {
  label?: string;
  icon?: React.ReactNode;
  button?: React.ReactNode;
  title?: string;
  placeholder?: string;
  value?: string;
  styling?: string;
  titleStyling?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};

const Inputs: React.FC<InputProps> = (props): JSX.Element => {
  const {
    label,
    icon,
    button,
    title,
    placeholder,
    value,
    styling,
    titleStyling,
    onKeyDown,
    onChange,
  } = props;

  return (
    <div className="w-full">
      <label htmlFor={label}>
        {title && (
          <p className={`${titleStyling} mb-1 text-[13px] leading-[19.5px]`}>
            {title}
          </p>
        )}
        <div className="flex items-center justify-center">
          {icon && icon}
          <input
            id={label}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className={`${styling} placeholder:text-papyrus-blue font-sfProDisplayMedium placeholder:opacity-100 text-[18px] tracking-wide leading-[250px] text py-3 px-5 appearance-none focus:outline-none`}
          />
          {button && button}
        </div>
      </label>
    </div>
  );
};

export default Inputs;
