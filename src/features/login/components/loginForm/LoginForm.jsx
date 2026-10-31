"use client";

import { useState } from "react";
import Link from "next/link";
import InputField from "@/components/common/inputField/InputField";
import CheckBox from "@/components/common/checkBox/CheckBox";
import Button from "@/components/common/button/Button";
import {
  MailIcon,
  LockIcon,
  ArrowRightIcon,
} from "@/components/common/icons/Icons";
import { loginContent, loginFields } from "../../data/loginData";
import styles from "./loginForm.module.css";

const iconMap = {
  mail: <MailIcon />,
  lock: <LockIcon />,
};

const LoginForm = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: API call will be added here later
    console.log({ ...formValues, remember });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        {loginFields.map((field) => (
          <InputField
            key={field.id}
            id={field.id}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            icon={iconMap[field.icon]}
            isPassword={field.isPassword}
            value={formValues[field.name]}
            onChange={handleChange}
          />
        ))}
      </div>

      <div className={styles.options}>
        <CheckBox
          id="remember"
          name="remember"
          label={loginContent.rememberLabel}
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
        />

        <Link
          href={loginContent.forgot.href}
          className={`${styles.forgot} textPrimary`}
        >
          {loginContent.forgot.text}
        </Link>
      </div>

      <Button type="submit">
        {loginContent.submitText}
        <ArrowRightIcon />
      </Button>
    </form>
  );
};

export default LoginForm;