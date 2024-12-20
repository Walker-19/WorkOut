export const getImage = (option: string) => {
    switch (option) {
        case 'quadriceps':
            return 'https://img.freepik.com/free-photo/man-with-one-knee-floor_1048-2621.jpg?t=st=1734647309~exp=1734650909~hmac=a0c28ff948e5d03ceb06803ae51ca062156cbc6d6e8f3c683a75aed8eb30261d&w=1380'
        case 'middle_back':
            return 'https://img.freepik.com/free-vector/posture-correction-infographics_23-2148974139.jpg?t=st=1734647525~exp=1734651125~hmac=0cde97174e6eb43020a12aaa6a31c44775e895c64550b45022ab99139e192213&w=1380';
        case 'hamstrings':
            return 'https://img.freepik.com/free-photo/man-lying-sidewats-lifting-one-leg_1048-2623.jpg?t=st=1734647566~exp=1734651166~hmac=166a076d8d9391a1c944941bea3f64c08aa8e12f2e118f96add80e41a0476e60&w=1380'
        case 'shoulders':
            return 'https://img.freepik.com/free-photo/man-lifting-weights-exercising-shoulders-back_1048-2615.jpg?semt=ais_hybrid'
        case 'abdominals':
            return 'https://img.freepik.com/free-vector/training-home-concept_23-2148487726.jpg?semt=ais_hybrid'
        case 'chest':
            return 'https://img.freepik.com/free-vector/man-doing-plank-exercises-with-dumbbells_23-2148508008.jpg?semt=ais_hybrid'
        case 'glutes':
            return 'https://img.freepik.com/free-vector/training-home-concept-with-man-weights_23-2148487013.jpg?semt=ais_hybrid'
        

        default: 
            return 'https://img.freepik.com/free-vector/stretching-exercises-concept-illustration_114360-8962.jpg?semt=ais_hybrid'
        
    }
}

export const getColor = (level: string) => {
    switch(level) {
            case 'beginner':
                return 'green'
            case 'intermediate':
                return 'orange'
            case 'expert':
                return 'red'
    }
}