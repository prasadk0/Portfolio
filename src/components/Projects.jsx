import Card from "./Card";

const project = [
    {   
        logo: '/flsmidth_logo.jpg',
        projectName: 'FLS SCS',
        description: 'Contributed to the backend development using GraphQL and implemented user authentication via Keycloak. Additionally, designed a custom Keycloak theme to align with project requirements.'
    },
    {
        logo: '/hccb.png',
        projectName: 'HCCB SIMS',
        description: 'Developed interactive dashboards using the Highcharts library and played a key role in Change Requests (CR) by enhancing existing features and building a comprehensive master screen.'
    },
    {  
        logo: '/froneri.jpg',
        projectName: 'Froneri SIMS',
        description: 'Expanded my technical skill set by actively contributing to key project deliverables, fostering continuous learning and improvement.'
    },
    {  
        logo: '/allegion.png',
        projectName: 'Allegion SIMS',
        description: 'Currently leading development efforts independently, demonstrating problem-solving abilities and ownership of critical tasks.'
    },
    {
        logo: '/muraai.jpg',
        projectName: 'Muraai Capture',
        description: 'Played a pivotal role in product enhancement by transitioning from an existing third-party tool to a custom-built solution, driving product independence and scalability.'
    }
];


export default function Project(){
    return(
        <div className=" flex flex-row flex-wrap items-center justify-center m-5">
         {project.map((ele)=>{
            return (
              <Card info={ele} />
            )
         })}
        </div>
    )
}