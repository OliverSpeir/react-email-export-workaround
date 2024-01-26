import { Body, Container, Head, Heading, Html, Img, Link, Preview, Text, } from "@react-email/components";
import * as React from "react";
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
export const NotionMagicLinkEmail = ({ loginCode, }) => (React.createElement(Html, null,
    React.createElement(Head, null),
    React.createElement(Preview, null, "Log in with this magic link"),
    React.createElement(Body, { style: main },
        React.createElement(Container, { style: container },
            React.createElement(Heading, { style: h1 }, "Login"),
            React.createElement(Link, { href: "https://notion.so", target: "_blank", style: {
                    ...link,
                    display: "block",
                    marginBottom: "16px",
                } }, "Click here to log in with this magic link"),
            React.createElement(Text, { style: { ...text, marginBottom: "14px" } }, "Or, copy and paste this temporary login code:"),
            React.createElement("code", { style: code }, loginCode),
            React.createElement(Text, { style: {
                    ...text,
                    color: "#ababab",
                    marginTop: "14px",
                    marginBottom: "16px",
                } }, "If you didn't try to login, you can safely ignore this email."),
            React.createElement(Text, { style: {
                    ...text,
                    color: "#ababab",
                    marginTop: "12px",
                    marginBottom: "38px",
                } }, "Hint: You can set a permanent password in Settings & members \u2192 My account."),
            React.createElement(Img, { src: `${baseUrl}/static/notion-logo.png`, width: "32", height: "32", alt: "Notion's Logo" }),
            React.createElement(Text, { style: footer },
                React.createElement(Link, { href: "https://notion.so", target: "_blank", style: { ...link, color: "#898989" } }, "Notion.so"),
                ", the all-in-one-workspace",
                React.createElement("br", null),
                "for your notes, tasks, wikis, and databases.")))));
NotionMagicLinkEmail.PreviewProps = {
    loginCode: "sparo-ndigo-amurt-secan",
};
export default NotionMagicLinkEmail;
const main = {
    backgroundColor: "#ffffff",
};
const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto",
};
const h1 = {
    color: "#333",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
};
const link = {
    color: "#2754C5",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    textDecoration: "underline",
};
const text = {
    color: "#333",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
};
const footer = {
    color: "#898989",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "12px",
    lineHeight: "22px",
    marginTop: "12px",
    marginBottom: "24px",
};
const code = {
    display: "inline-block",
    padding: "16px 4.5%",
    width: "90.5%",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    border: "1px solid #eee",
    color: "#333",
};
