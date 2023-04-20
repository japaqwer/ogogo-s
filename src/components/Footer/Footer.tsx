import React, { ReactNode, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

interface Props {
  children: ReactNode;
}

const Logo = (props: Props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3" fill="currentColor" />
      <path d="M26" fill="#2F855A" />
    </svg>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <button
      style={{
        background: "rgba(0, 0, 0, 0.1)",
        borderRadius: "9999px",
        width: "32px",
        height: "32px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease",
      }}
    //   
    >
      {children}
    </button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      style={{ fontWeight: 500, fontSize: "1.125rem", marginBottom: "0.5rem" }}
    >
      {children}
    </h2>
  );
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    console.log(`Subscribing email: ${email}`);
  };
  return (
    <div style={{ backgroundColor: "#F7FAFC", color: "#1A202C" }}>
      <div style={{ maxWidth: "72rem", padding: "2.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ marginRight: "1rem" }}>
           
            <small style={{ fontSize: "0.875rem" }}>
              © 2022 Chakra Templates. All rights reserved
            </small>
            <div style={{ display: "flex", marginTop: "1rem" }}>
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </div>
          </div>
          <div style={{ marginRight: "1rem" }}>
            <ListHeader>Company</ListHeader>
            <a href="#">About us</a>
            <a href="#">Blog</a>
            <a href="#">Contact us</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
          </div>
          <div style={{ marginRight: "1rem" }}>
            <ListHeader>Support</ListHeader>
            <a href="#">Help Center</a>
            <a href="#">Terms of Service</a>
            <a href="#">Legal</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Satus</a>
          </div>
          <div></div>
          <h2>Stay up to date</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Your email address"
              value={email}
              onChange={handleEmailChange}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: 0,
                padding: "0.5rem",
                marginRight: "0.5rem",
                width: "100%",
              }}
            />
            <button
              onClick={handleSubscribe}
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "0.5rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <BiMailSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default Footer;
