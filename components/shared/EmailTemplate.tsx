import * as React from "react";
// interface EmailTemplateProps {
//     name: string;
//     email: string;
//     message: string;
//   }
export const EmailTemplate = ({ name, email, message }:any) => {
  return (
    <div>
      <h2>You just received a new message!</h2>
     
      <p>
        <span>Name:</span>
        <strong>{name}</strong>
      </p>
      <p>
        <span>Email:</span>
        <strong>{email}</strong>
      </p>
      <p>
        <span>Message:</span>
        <strong>{message}</strong>
      </p>
    </div>
  );
};