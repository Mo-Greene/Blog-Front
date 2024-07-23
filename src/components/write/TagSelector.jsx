import {useEffect, useState} from "react";
import {createTag, findTags} from "../../api/tag/tag.js";
import {styles} from "./styles.js";
import PropTypes from "prop-types";

const TagSelector = ({ setSelectedTag }) => {

  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * 태그 검색
   * @returns {Promise<void>}
   */
  const fetchTags = async () => {
    try {
      if (searchTerm) {
        const response = await findTags(searchTerm);
        setTags(response.data.data);
      } else {
        setTags([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTagChange = async (e) => {
    const value = e.target.value;
    if (value === "createTag") {
      try {
        const response = await createTag({ name: searchTerm });
        alert("태그가 저장되었습니다.");
        setSearchTerm(""); // 검색어 초기화
        setSelectedTag(response.data.id); // 새로 생성된 태그 ID를 선택
      } catch (error) {
        console.error("태그 생성 실패", error);
        alert("태그 저장에 실패했습니다.");
      }
    } else {
      setSelectedTag(value);
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetchTags();
  }, [searchTerm]);

  return (
    <div>
      <styles.TitleInput onChange={handleSearchTermChange} placeholder="태그 검색" value={searchTerm} />
      <styles.StyledSelect onChange={handleTagChange}>
        <option value="">태그 선택</option>
        {tags.map((tag) => (
          <styles.StyledOption key={tag.id} value={tag.id}>
            {tag.name}
          </styles.StyledOption>
        ))}
        {searchTerm && (
          <option value="createTag">{searchTerm} 을(를) 저장하시겠습니까?</option>
        )}
      </styles.StyledSelect>
    </div>
  );
};

TagSelector.propTypes = {
  setSelectedTag: PropTypes.func.isRequired,
};

export default TagSelector;