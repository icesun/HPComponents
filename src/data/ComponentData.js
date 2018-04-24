
/** 
 *  1. Input components have to HAVE ID 
 *  2. First level components have to HAVE ID
 *  3. ID has to be unique
 *  4. classes should be strings concated with space
 *  5. pdf_style should be a string or an array of strings or 'none' which means not print to pdf
 *  6. Every HPText should BE and ONLY BE a block. types in text_arr, 'p', 'span', 'html'. the 'html' type has to have 'html' and 'text' attribute
 * 
 * 
 */
export const components = [
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'header1',
                pdf_style: 'header1',
                text: 'Analyse your team with an SWOT Analysis',
            }
        ]
    },
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'desc',
                pdf_style: 'none',
                text: 'A SWOT (Strengths, Weaknesses, Opportunities and Threats) Analysis is used to identify a team’s internal strengths and weaknesses (as the team’s current state), as well as opportunities and threats external to the team (as the team’s future state).',                        
            }
        ]
    },
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'desc',
                pdf_style: 'none',
                text: 'Collecting and analysing information is a critical part of any quality improvement process. However, with so many tools to collect and display information, sometimes teams invest too much energy just gathering information, and fail to take action using the information they gathered. This SWOT Analysis builds on current state activities, and helps move organizations beyond collection and analysis to development and implementation of clear action steps. By focusing on action, this SWOT Analysis can become an integral part of the team problem solving process and can a useful tool to identify and implement potential team improvements.',       
            },
        ]
    },
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'desc',
                pdf_style: 'none',
                text: 'Populate the tables below.  This simple worksheet can form the starting-point for developing your team.  A SWOT analysis is best done collectively with team members, but it can also form the basis for your own independent analysis and thinking as a team leader. ',        
            },
        ]
    },
];

export const pdfstyles = {

};
