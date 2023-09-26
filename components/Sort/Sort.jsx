import { useState } from "react";
import { Form } from "react-bootstrap";

export default function Sort({reviews, getSort}) {
    const [sorting, setSorting] = useState('')

    const handleChange = (e) => {
        const selectValue = e.target.value
        setSorting(selectValue)

        const sortArr = reviews

        if(selectValue === 'title-descending' || selectValue === 'title-ascending'){
            if(selectValue === 'title-descending'){
                sortArr.sort((review1, review2) => {
                    const title1 = review1.titleReview.toUpperCase();
                    const title2 = review2.titleReview.toUpperCase();
                    if(title1 < title2){
                        return 1
                    }
                    if(title1 > title2){
                        return -1
                    }
                    return 0
                })
            }
    
            if(selectValue === 'title-ascending'){
                sortArr.sort((review1, review2) => {
                    const title1 = review1.titleReview.toUpperCase();
                    const title2 = review2.titleReview.toUpperCase();
                    if(title1 > title2){
                        return 1
                    }
                    if(title1 < title2){
                        return -1
                    }
                    return 0
                })
            }
            getSort(sortArr)
        }

        const dateArr = sortArr.map(item => {
            return {...item, createdAt: new Date(item.createdAt)}
        })

        if(selectValue === 'date-last'){   
            dateArr.sort(
                (review1, review2) => Number(review2.createdAt) - Number(review1.createdAt)
            )
        }

        if(selectValue === 'date-new'){
            dateArr.sort(
                (review1, review2) => Number(review1.createdAt) - Number(review2.createdAt)
            )
        }
        getSort(dateArr)
    }

    if(sorting === ""){
        getSort(reviews)
    }

    return (
        <div className="mb-3 col col-auto">
            <Form.Group>
                <Form.Label>Sort by</Form.Label>
                <Form.Select
                    name="sort"
                    placeholder="Sort by"
                    aria-label="Sort"
                    onChange={handleChange}
                    value={sorting}
                >
                    <option value="">Select Sort Type</option>
                    <option value="title-ascending">Review title ascending</option>
                    <option value="title-descending">Review title descending</option>
                    <option value="date-last">Date latest</option>
                    <option value="date-new">Date oldest</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
