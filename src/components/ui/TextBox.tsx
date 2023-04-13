import React, { useRef } from "react";

import styled from "styled-components";

const Container = styled.div`
  margin-block: 0.5rem;

  label {
    display: inline-block;
    width: 10rem;
    margin-right: 0.5rem;
    text-align: right;
    vertical-align: middle;
  }

  input {
    width: 20rem;
  }
`;

type TextBoxProps = {
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "password"; // ← 계속해서 지원할 타입을 쭉 써주자.
  value: string;
  onChange: (value: string) => void;
};

export default function TextBox({
  label,
  placeholder = undefined,
  type = "text",
  value,
  onChange,
}: TextBoxProps) {
  const id = useRef(`textbox-${Math.random().toString().slice(2)}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <label htmlFor={id.current}>{label}</label>
      <input
        id={id.current}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}