export const API_KEY='AIzaSyA21nOxDYWY7vM93DuHJ3g5xiKLFvuRj_A'

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor (value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
}