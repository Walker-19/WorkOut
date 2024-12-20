import axios from "axios";



export const getAll = async () => { 
    try {
        const response = await axios.get('/api/')
        console.log(response);
        return response.data
    }catch (error) {
        console.log(error);
    }

}
export const getAllTypes = async () => {
    try {
            const response = await axios.get("/api/alltypes")
    }catch (error) {
        console.log(error);
    }
}

export const getMuscleGroups = async () => {
    try {
        const response = await axios.get('/api/allmuscles')
        console.log(response);
        return response
    }catch (error) {
        console.log(error);
    }
}

export const getDifficultyLevels = async () => { 
    try {
        const response = await axios.get("/api/alldifficulties")
        return response.data
    }catch (error) {
        console.log(error);
    }
}

export const getMuscleExercices = async (muscle: string) => { 

    try {
        const response = await axios.get(`/api/muscle/${muscle}`)
        return response.data
    }catch (error) {
        console.log(error);
    }
}