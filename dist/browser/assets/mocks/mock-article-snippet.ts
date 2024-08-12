import { Article } from "src/app/modules/blog/blog.component"

export function mockArticleSnippet(): Article {
  return {
    title: "Card Title",
    description: "Some quick example text to build on the card title and make up the bulk of this card's content.",
    imageLocation: "../../assets/gear.png",
    button: {
        text: "Go somewhere",
        url: "#",
    } 
  } as Article
}