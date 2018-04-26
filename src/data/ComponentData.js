
/** 
 *  1. Input components have to HAVE ID 
 *  3. ID has to be unique
 *  4. classes should be strings concated with space
 *  5. pdf_style should be a string or an array of strings or 'none' which means not print to pdf
 *  6. HPText -- types in text_arr, 'p', 'span', 'html'. the 'html' type has to have 'html' and 'text' attribute
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
    // Try Textarea
    {
        type: 'HPTextarea',
        classes: 'form-group',
        extra: {
            type: 'HPText',
            pdf_style: 'smallMarginBottom',
            text_arr: [
                {
                    type: 'p',
                    classes: '',
                    pdf_style: '',
                    text: 'This is a test',
                }
            ]
        },
        body: {
            id: 'textarea_1',
            classes: 'form-control',
            pdf_style: 'oneLine',
            pdf_width: ['*'],
            default_text: '',
        }
    },


    //Table 1
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(1) Identify the Team Objective'
            }
        ]
    },
    {
        id: 'table1',
        type: 'HPTable',
        classes: 'table',
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                text_arr: [
                                    {
                                        type: 'span',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'Focal Team: ',        
                                    },
                                    {
                                        type: 'span',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'Describe a team or group that you currently (or recently) worked in.',        
                                    },                                    
                                ]
                        
                            },
                        ]
                    },
                ],
            },
            {
                classes: '',
                td_arr: [
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table1_focal_team',
                                    classes: 'form-control',
                                    pdf_style: 'oneLine',
                                    pdf_width: ['*'],
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ]
            }, 
            {
                classes: 'tr_header',
                td_arr: [
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPText',
                                text_arr: [
                                    {
                                        type: 'span',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'Team Objective: ',        
                                    },
                                    {
                                        type: 'span',
                                        classes: '',
                                        pdf_style: '',
                                        text: 'What is the issue or goal that the team would like to achieve or improve upon?',        
                                    },                                    
                                ]
                        
                            },
                        ]
                    },
                ],
            },
            {
                classes: '',
                td_arr: [
                    {
                        type: 'EmbededTD',
                        classes: '',
                        embeded_arr: [
                            {
                                type: 'HPTextarea',
                                classes: '',
                                body: {
                                    id: 'table1_team_objective',
                                    classes: 'form-control',
                                    pdf_style: 'oneLine',
                                    pdf_width: ['*'],
                                    default_text: '',
                                }
                            }
                        ]
                    },                    
                ]
            },
        ],
    },

    //Table 2
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(2) Identify the Strengths'
            }
        ]
    },


    //Table 3
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(3) Identify the Weaknesses'
            }
        ]
    },

    //Table 4
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(4) Identify the Opportunities'
            }
        ]
    },

    //Table 5
    {
        type: 'HPText',
        text_arr: [
            {
                type: 'p',
                classes: 'header3',
                pdf_style: 'header3',
                text: '(5) Identify the Threats'
            }
        ]
    },

];

export const pdfstyles = {
    oneLine: {
        margin: [0, 10, 0, 20]
    },
    smallMarginBottom: {
        marginBottom: -20
    } 

};
