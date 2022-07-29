import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient from "../client";

export default function Categories() {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"] {
        ...,
       
      }[]
`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);
  // console.log("Iam the cate", Categories);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      {Categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image?.asset._ref}
          title={category.name}
        />
      ))}
      {/* <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 3"
      />

      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 3"
      /> */}
    </ScrollView>
  );
}
