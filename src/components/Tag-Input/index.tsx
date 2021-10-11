import { useState, useEffect } from "react";
import { useConsts } from '../../store/hooks'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: string) => option,
});

const TagsInput = (props: any) => {
  const [tags, setTags] = useState<string[]>(props.selectedTags ? props.selectedTags : []);
  const { hashtags, getHashTags } = useConsts();

  useEffect(() => {
    getHashTags();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const addTags = (event: any, value: any) => {
    if (value) {
      var tag = value.trim();
      if (!(tags.indexOf(tag) > -1)) {
        let tagsTmp = tags.concat(tag);
        setTags(tagsTmp);
        props.setSelectedTags(tagsTmp);
      }
    }
  };

  const removeTags = (index: any) => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    props.setSelectedTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="tags-input">
      {/* <input
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        type="text"
        onKeyUp={(e: any) => addTags(e, e.target.value)}
        placeholder="Input Tags"
      /> */}
      { props.tagsInputType === 'view' ? '' :
        <Autocomplete
          id="filter-demo"
          options={hashtags}
          getOptionLabel={(option: any) => option}
          filterOptions={filterOptions}
          renderInput={(params: any) =>
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                placeholder: "Input Tags",
                style: { color: "rgb(74, 85, 104)" },
              }}
              variant="outlined" />}
          onChange={addTags}
        />
      }

      <div className="mt-5">
        {tags.map((tag, index) => (
          <button key={index} className="chip">
            <span>{tag}</span>
            { props.tagsInputType === 'view' ? '' : (<span onClick={e => removeTags(index)}>
              <svg className="pl-2 h-3 w-3 box-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>)}
          </button>
        ))}
      </div>

    </div>
  );
};

export default TagsInput;