import React, { type FC } from "react";

import { Link } from "gatsby";

import { type Edge } from "@/types/edge";

import * as styles from "./feed.module.scss";

type FeedProps = {
  edges: Array<Edge>;
};

const tagColors: Record<string, string> = {
  "Biology": "#F44336", // Green
  "Physics": "#2196F3", // Blue
  "Technology": "#FF9800", // Orange
  "Art": "#E91E63", // Pink
  "Economics": "#8BC34A", // Light Green
  "History": "#795548", // Brown
  "Chemistry": "#009688", // Teal
  "Mathematics": "#673AB7", // Purple
  "Geography": "#FF5722", // Deep Orange
  "Philosophy": "#607D8B", // Blue Gray
  "Culture": "#4CAF50", // Red
  "Politics": "#3F51B5", // Indigo
  "Language": "#9C27B0", // Dark Pink
  "Science": "#00BCD4", // Cyan
  "Health": "#FF7043", // Warm Orange
  "Music": "#FFC107", // Amber (Readable on White)
  "Sports": "#43A047", // Dark Green
  "Computers": "#9E9E9E", // Neutral Gray
  "Engineering": "#37474F", // Dark Blue Gray
  "Psychology": "#FF4081", // Bright Pink
  "Planetary Science": "#5C6BC0", // Soft Blue
  "Default": "#9E9E9E", // Grey for unknown tags
};


const Feed: FC<FeedProps> = ({ edges }) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <div className={styles.item} key={edge.node.fields.slug}>
        <div className={styles.meta}>
          <time
            className={styles.time}
            dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "long", day: "numeric" },
            )}
          >
            {new Date(edge.node.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
          <span className={styles.divider} />
          <span className={styles.category}>
            <Link style={{color:tagColors[edge.node.frontmatter.category] || tagColors['Default'] }} to={edge.node.fields.categorySlug} className={styles.link}>
              {edge.node.frontmatter.category}
            </Link>
          </span>
        </div>
        <h2 className={styles.title}>
          <Link
            className={styles.link}
            to={edge.node.frontmatter?.slug || edge.node.fields.slug}
          >
            {edge.node.frontmatter.title}
          </Link>
        </h2>
        <p className={styles.description}>
          {edge.node.frontmatter.description}
        </p>
        <Link
          className={styles.more}
          to={edge.node.frontmatter?.slug || edge.node.fields.slug}
        >
          <hr></hr>
        </Link>
      </div>
    ))}
  </div>
);

export { Feed };
