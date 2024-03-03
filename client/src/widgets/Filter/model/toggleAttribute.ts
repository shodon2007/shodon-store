import { FilterType } from "src/shared/api/filterApi";
import { Attribute } from "src/shared/api/productApi";

function toggleAttribute(filters: FilterType, attribute: Attribute, checked: boolean): FilterType {
    const newFilter = {...filters};
    const {
        title,
        description
    } = attribute;

    if (checked) {
        newFilter[title] = newFilter[title] ? [...newFilter[title], description] : [description];
    } else {
        newFilter[title] = newFilter[title].filter(el => el != description);
    }

    return newFilter;
}

export default toggleAttribute;