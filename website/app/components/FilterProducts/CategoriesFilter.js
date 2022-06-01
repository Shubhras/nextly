import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Tree } from "antd";
import func from "../../../util/helpers/func";
import filterRouteLinkGenerate from "./filterRouterLink";
import { filterProducts_r } from "../../../redux/actions";

const Page = () => {

   const { categories } = useSelector(({ categories }) => categories);
   const { filterProducts } = useSelector(
      ({ filterProducts }) => filterProducts
   );

   const [state, seTstate] = useState({ categories: [], allData: [] });

   const dispatch = useDispatch();

   const getcategories = () => {
      const dataManipulate = func.getCategoriesTreeOptions(categories, true);
      seTstate({ ...state, categories: dataManipulate, allData: dataManipulate });
   };

   useEffect(() => {
      getcategories();
   }, []);

   const onChangeSearch = (e) => {
      const filterData = func.search_array_object_tree(
         e.target.value,
         state.allData
      );
      seTstate({ ...state, categories: filterData, skip: 0 });
   };

   const onChange = (checkedValues) => {
      dispatch(
         filterProducts_r({
            ...filterProducts,
            categories: checkedValues,
            skip: 0,
         })
      );
      filterRouteLinkGenerate({
         ...filterProducts,
         categories: checkedValues,
         skip: 0,
      });
   };

   return (
      <>
         <span className="search_icon">
         <Input style={{border: "none" ,fontWeight: 'bold',marginLeft:"-10px" }}
            placeholder="Categories"
            className="svg-background"
            onChange={onChangeSearch}
            suffix={<SearchOutlined className="search_icon-1" />}
         />
         </span>

         <div className="CategoriesFilter rounded-bottom bg-transparent" style={{border: "none"}}>
            <Tree
               expandedKeys={func.selectCategoriesFilterData(state.allData)}
               multiple
               className="bg-transparent"
               selectedKeys={filterProducts.categories}
               onSelect={onChange}
               treeData={state.categories}
            />
            
         </div>

      </>
   );
};

export default Page;
