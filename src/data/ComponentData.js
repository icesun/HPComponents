import '../StyleSheets/PdfTable.scss'
import '../StyleSheets/PdfTextArea.scss'
import '../StyleSheets/StringComponent.scss'
import '../StyleSheets/Button.scss'

/** 
 *  1. Input components have to HAVE ID
 *  2. First level components have to HAVE ID
 * 
 * 
 */
export const components = [
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header1',
        pdf_style: 'header1',
        text: 'Analyse your team with an SWOT Analysis',
    },
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'desc',
        pdf_style: 'desc',
        text: 'A SWOT (Strengths, Weaknesses, Opportunities and Threats) Analysis is used to identify a team’s internal strengths and weaknesses (as the team’s current state), as well as opportunities and threats external to the team (as the team’s future state).',

    },
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'desc',
        pdf_style: 'desc',
        text: 'Collecting and analysing information is a critical part of any quality improvement process. However, with so many tools to collect and display information, sometimes teams invest too much energy just gathering information, and fail to take action using the information they gathered. This SWOT Analysis builds on current state activities, and helps move organizations beyond collection and analysis to development and implementation of clear action steps. By focusing on action, this SWOT Analysis can become an integral part of the team problem solving process and can a useful tool to identify and implement potential team improvements.',
    },
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'desc',
        pdf_style: 'desc',
        text: 'Populate the tables below.  This simple worksheet can form the starting-point for developing your team.  A SWOT analysis is best done collectively with team members, but it can also form the basis for your own independent analysis and thinking as a team leader. ',
    },
    //Table 1
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header3',
        pdf_style: 'header3',
        text: '(1) Identify the Team Objective',
    },
    {
        id: 'table1',
        type: 'PdfTable',
        classes: "table pdftable",
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: 'Focal Team:  Describe a team or group that you currently (or recently) worked in.', classes: 'th_first', pdf_style: 'th_first'},
                ]
            },
            {
                td_arr: [
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table1_focal_team', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                ]
            },
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: 'Team Objective:  What is the issue or goal that the team would like to achieve or improve upon?', classes: 'th_first', pdf_style: 'th_first'},
                ]
            },
            {
                td_arr: [
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table1_team_objective', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                ]
            },
        ],        
    },

    //Table 2
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header3',
        pdf_style: 'header3',
        text: '(2) Identify the Strengths',
    },
    {
        id: 'table2',
        type: 'PdfTable',
        classes: "table pdftable",
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: '', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Strengths What are your current team’s strengths?', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Preserve and Protect What actions will we need to take to preserve and protect those current strengths?', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Prevent How can we prevent slippage of existing strengths?', classes: 'th_first', pdf_style: 'th_first'},
                ]                                
            },
            {
                classes: 'tr_example',
                td_arr: [
                    {type: 'NormalTD', text: 'e.g.', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Knowledgeable and adaptable employees', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Update Workforce Development Plan', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Pay skilled employees better than competition', classes: 'td_example', pdf_style: 'td_example'},
                ]                                
            }, 
            {
                td_arr: [
                    {type: 'NormalTD', text: '1', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_1_strengths', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_1_preserve_protect', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_1_prevent', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },           
            {
                td_arr: [
                    {type: 'NormalTD', text: '2', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_2_strengths', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_2_preserve_protect', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_2_prevent', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },            {
                td_arr: [
                    {type: 'NormalTD', text: '3', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_3_strengths', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_3_preserve_protect', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_3_prevent', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },            {
                td_arr: [
                    {type: 'NormalTD', text: '4', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_4_strengths', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_4_preserve_protect', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table2_4_prevent', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
        ],
    },

    //Table 3
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header3',
        pdf_style: 'header3',
        text: '(3) Identify the Weaknesses',
    },
    {
        id: 'table3',
        type: 'PdfTable',
        classes: "table pdftable",
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: '', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Weaknesses What are your current team’s weaknesses?', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Mitigate What can mitigate these weaknesses, to reduce their power or influence?', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Overcome What would it take to overcome the weaknesses?', classes: 'th_first', pdf_style: 'th_first'},
                ]                                
            },
            {
                classes: 'tr_example',
                td_arr: [
                    {type: 'NormalTD', text: 'e.g.', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Employees leave for better opportunities', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Promote from within', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Grow the organization so more opportunities are available', classes: 'td_example', pdf_style: 'td_example'},
                ]                                
            }, 
            {
                td_arr: [
                    {type: 'NormalTD', text: '1', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_1_weakness', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_1_mitigate', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_1_overcome', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },           
            {
                td_arr: [
                    {type: 'NormalTD', text: '2', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_2_weakness', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_2_mitigate', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_2_overcome', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },            {
                td_arr: [
                    {type: 'NormalTD', text: '3', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_3_weakness', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_3_mitigate', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_3_overcome', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },            {
                td_arr: [
                    {type: 'NormalTD', text: '4', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_4_weakness', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_4_mitigate', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table3_4_overcome', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
        ],
    },    

    //Table 4
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header3',
        pdf_style: 'header3',
        text: '(4) Identify the Opportunities',
    },
    {
        id: 'table4',
        type: 'PdfTable',
        classes: "table pdftable",
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: '', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Opportunities What are the opportunities currently available to your team?', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Capitalize How can we capitalize on the opportunities?', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Enhance What strategies can we design that will enhance those opportunities?', classes: 'th_first', pdf_style: 'th_first'},
                ]                                
            },
            {
                classes: 'tr_example',
                td_arr: [
                    {type: 'NormalTD', text: 'e.g.', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Customers dissatisfied with rival products', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Better monitor customer needs', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Adopt a customer-centric strategy as a point of difference', classes: 'td_example', pdf_style: 'td_example'},
                ]                                
            }, 
            {
                td_arr: [
                    {type: 'NormalTD', text: '1', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_1_opportunities', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_1_capitalize', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_1_enhance', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },           
            {
                td_arr: [
                    {type: 'NormalTD', text: '2', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_2_opportunities', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_2_capitalize', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_2_enhance', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },            {
                td_arr: [
                    {type: 'NormalTD', text: '3', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_3_opportunities', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_3_capitalize', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_3_enhance', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },            {
                td_arr: [
                    {type: 'NormalTD', text: '4', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_4_opportunities', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_4_capitalize', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table4_4_enhance', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
        ],
    },  

    //Table 5
    {
        type: 'StringComponent',
        tag: 'p',
        classes: 'header3',
        pdf_style: 'header3',
        text: '(5) Identify the Threats',
    },
    {
        id: 'table5',
        type: 'PdfTable',
        classes: "table pdftable",
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: '', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Threats Internal and/or external factors that may undermine the team?', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Prevent What can prevent these threats in the future?', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'Isolate How can threats be isolated?', classes: 'th_first', pdf_style: 'th_first'},
                ]                                
            },
            {
                classes: 'tr_example',
                td_arr: [
                    {type: 'NormalTD', text: 'e.g.', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Competitors hire away most skilled employees', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Survey to understand what motivates employees to stay', classes: 'td_example', pdf_style: 'td_example'},
                    {type: 'NormalTD', text: 'Keep benefits competitive and leverage our positive culture', classes: 'td_example', pdf_style: 'td_example'},
                ]                                
            }, 
            {
                td_arr: [
                    {type: 'NormalTD', text: '1', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_1_threats', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_1_prevent', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_1_isolate', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },           
            {
                td_arr: [
                    {type: 'NormalTD', text: '2', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_2_threats', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_2_prevent', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_2_isolate', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },            {
                td_arr: [
                    {type: 'NormalTD', text: '3', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_3_threats', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_3_prevent', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_3_isolate', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },            {
                td_arr: [
                    {type: 'NormalTD', text: '4', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_4_threats', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_4_prevent', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },                   
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'table5_4_isolate', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
        ],
    }, 

    {
        id: 'c4',
        type: 'Button',
        classes: 'btn btn-primary',
        value: 'Submit',
        extra: {
            action: 'saveDB',
        }
    },
    {
        id: 'c5',
        type: 'Button',
        classes: 'btn btn-primary',
        value: 'Download PDF',
        extra: {
            action: 'downloadPDF',
        }
    }

];

export const components_pdfstyles = {
    header1: {
        fontSize: 18,
        bold: true,
        margin: [0, 10] 
    },
    taLabel: {
        fontSize: 14,
        bold: true,
    },
    oneline: {
        margin: [0, 10, 0, 20]
    },
    headerline: {
        fontSize: 16,
    },
    th_first: {
        fontSize: 14,
        bold: true,
    }
};

export const tableWidths = {
    //decide the width of columns of the table. the property name has to coincide with the table id
    lever_table: ['25%', '*', '*']
};

