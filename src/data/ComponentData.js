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
        classes: 'header2',
        pdf_style: 'header2',
        text: '',

    },
    //Problem and goal Textarea
    {
        id: 'problem_or_goal',
        type: 'PdfTextArea',
        classes: "form-control pdftextarea ta_medium",
        div_classes: "form-group",       
        extra: {
            label: 'What is the problem or goal?',
            question: 'Current situation: What is happening now; what is problematic?  Desired future: What is the business need; What does the context/strategy call for?',
        }        
    },

    //Lever Table
    {
        id: 'lever_table',
        type: 'PdfTable',
        classes: "table pdftable",
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                classes: 'tr_header',
                td_arr: [
                    {type: 'NormalTD', text: 'Lever', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'What’s happening now?', classes: 'th_first', pdf_style: 'th_first'},
                    {type: 'NormalTD', text: 'What could you do?', classes: 'th_first', pdf_style: 'th_first'},
                ]                                
            },
            {
                td_arr: [
                    {type: 'NormalTD', text: 'Leadership commitment (What’s modelled)', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_1_1', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_1_2', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
            {
                td_arr: [
                    {type: 'NormalTD', text: 'Values & behaviours (What’s expected)', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_2_1', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_2_2', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
            {
                td_arr: [
                    {type: 'NormalTD', text: 'Workforce capabilities (Who’s equipped)', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_3_1', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_3_2', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
            {
                td_arr: [
                    {type: 'NormalTD', text: 'Recognition & consequences (What’s reinforced)', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_4_1', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_4_2', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
            {
                td_arr: [
                    {type: 'NormalTD', text: 'Practices & procedures (What’s habitual)', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_5_1', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_5_2', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
            {
                td_arr: [
                    {type: 'NormalTD', text: 'Underpinning structures (What enables)', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_6_1', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_6_2', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },
            {
                td_arr: [
                    {type: 'NormalTD', text: 'Monitor & evolve (What’s measured)', classes: 'th_second'},
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_7_1', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    },
                    {type: 'EmbededTD', classes: 'td_embed', 
                        embed: [
                            {id: 'lever_table_7_2', type: 'PdfTextArea', classes: 'form-control embed_ta'}
                        ]
                    }                   
                ]
            },

        ],
    },

    //Action Textarea
    {
        id: 'actions',
        type: 'PdfTextArea',
        //input: 'YES',
        classes: "form-control pdftextarea ta_medium",
        div_classes: "form-group",       
        extra: {
            label: 'Action you can take?',
            question: '(Clarify business need; Further investigation to identify levers in play; Explore areas where levers are having different impact; Other…)',
        }
        
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

