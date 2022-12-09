import { LOCALDOMAIN } from "@/utils";
import axios from "axios";
import type { NextPage } from "next";
import styles from "./styles.module.scss";

const showdown = require("showdown");

export interface IArticleProps {
  title: string;
  author: string;
  description: string;
  createTime: string;
  content: string;
}

const Article: NextPage<IArticleProps> = ({
  // eslint-disable-next-line react/prop-types
  title,
   // eslint-disable-next-line react/prop-types
  author,
   // eslint-disable-next-line react/prop-types
  description,
   // eslint-disable-next-line react/prop-types
  createTime,
   // eslint-disable-next-line react/prop-types
  content,
}) => {
  const converter = new showdown.Converter();
  return (
    <div className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.info}>
        作者：{author} | 创建时间: {createTime}
      </div>
      <div className={styles.description}>{description}</div>
      <div
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
        className={styles.content}
      />
    </div>
  );
};

Article.getInitialProps = async (context:any) => {
  const { articleId } = context.query;
  const { data } = await axios.get(`${LOCALDOMAIN}/api/articleInfo`, {
    params: {
      articleId,
    },
  });
  return data;
};

export default Article;
