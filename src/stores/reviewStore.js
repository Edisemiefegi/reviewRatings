import { defineStore } from "pinia";


export const usereviewStore = defineStore('reviewstore', {
    state: () => ({
        Reviews: [],
        reviewToEdit:null
    }),
    getters: {
        AverageRating(){
            if(this.Reviews.length === 0) return 0;
             
            const sum = this.Reviews.reduce((acc, review) => acc + Math.floor(review.ratings), 0);
            return sum / this.Reviews.length
        }
    },
    actions:  {
        addReview(review){
            this.Reviews.push(review)
        },

        DeleteReview(reviewId){
            console.log(reviewId);
           this.Reviews = this.Reviews.filter((e) => e.id !== reviewId)
        },

        editReview(review){

            //Find the index of the review to be edited
            const reviewIndex = this.Reviews.findIndex(el => el.id === review.id)
            this.Reviews[reviewIndex] = review
            
            //clear the reviewToEdit
            this.reviewToEdit = null
        }
    },


    persist: true
})