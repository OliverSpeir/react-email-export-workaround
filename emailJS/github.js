import { Body, Button, Container, Head, Html, Img, Link, Preview, Section, Text, } from "@react-email/components";
import * as React from "react";
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
export const GithubAccessTokenEmail = ({ username, }) => (React.createElement(Html, null,
    React.createElement(Head, null),
    React.createElement(Preview, null, "A fine-grained personal access token has been added to your account"),
    React.createElement(Body, { style: main },
        React.createElement(Container, { style: container },
            React.createElement(Img, { src: `${baseUrl}/static/github.png`, width: "32", height: "32", alt: "Github" }),
            React.createElement(Text, { style: title },
                React.createElement("strong", null,
                    "@",
                    username),
                ", a personal access was created on your account."),
            React.createElement(Section, { style: section },
                React.createElement(Text, { style: text },
                    "Hey ",
                    React.createElement("strong", null, username),
                    "!"),
                React.createElement(Text, { style: text },
                    "A fine-grained personal access token (",
                    React.createElement(Link, null, "resend"),
                    ") was recently added to your account."),
                React.createElement(Button, { style: button }, "View your token")),
            React.createElement(Text, { style: links },
                React.createElement(Link, { style: link }, "Your security audit log"),
                " \u30FB",
                " ",
                React.createElement(Link, { style: link }, "Contact support")),
            React.createElement(Text, { style: footer }, "GitHub, Inc. \u30FB88 Colin P Kelly Jr Street \u30FBSan Francisco, CA 94107")))));
GithubAccessTokenEmail.PreviewProps = {
    username: "alanturing",
};
export default GithubAccessTokenEmail;
const main = {
    backgroundColor: "#ffffff",
    color: "#24292e",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};
const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 0 48px",
};
const title = {
    fontSize: "24px",
    lineHeight: 1.25,
};
const section = {
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "5px",
    textAlign: "center",
};
const text = {
    margin: "0 0 10px 0",
    textAlign: "left",
};
const button = {
    fontSize: "14px",
    backgroundColor: "#28a745",
    color: "#fff",
    lineHeight: 1.5,
    borderRadius: "0.5em",
    padding: "12px 24px",
};
const links = {
    textAlign: "center",
};
const link = {
    color: "#0366d6",
    fontSize: "12px",
};
const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center",
    marginTop: "60px",
};
