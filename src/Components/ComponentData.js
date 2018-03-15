import '../StyleSheets/PdfTable.scss'
import '../StyleSheets/PdfTextArea.scss'


export const components = [
    {
        id: 'c1',
        type: 'PdfTextArea',
        classes: "form-control pdftextarea ta_medium",
        div_classes: "form-group",       
        extra: {
            label: 'What is the problem or goal?',
            question: 'Current situation: What is happening now; what is problematic?  Desired future: What is the business need; What does the context/strategy call for?',
        }        
    },
    {
        id: 'c2',
        type: 'PdfTable',
        classes: "table pdftable",
        div_classes: "form-group table-responsive",
        tr_arr: [
            {
                id: 'c2_1',
                classes: '',
                td_arr: [
                    {id: 'c2_1_1', type: 'NormalTD', text: 'Lever', classes: 'th-black'},
                    {id: 'c2_1_2', type: 'NormalTD', text: 'What’s happening now?', classes: 'td-black'},
                    {id: 'c2_1_3', type: 'NormalTD', text: 'What could you do?', classes: 'td-black'}]
            },
            {
                id: 'c2_2',
                classes: '',
                td_arr: [
                    {id: 'c2_2_1', type: 'NormalTD', text: 'Leadership commitment(What’s modelled)', classes: 'th-blue'},
                    {id: 'c2_2_2', type: 'EmbededTD', classes: 'td-blue td-embed', 
                        embed: [
                            {id: 'c2_2_2_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                        ]},
                    {id: 'c2_2_3', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_2_3_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]},
                ]
            },
            {
                id: 'c2_3',
                classes: '',
                td_arr: [
                    {id: 'c2_3_1', type: 'NormalTD', text: 'Values & behaviours(What’s expected)', classes: 'th-blue'},
                    {id: 'c2_3_2', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_3_2_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]},
                    {id: 'c2_3_3', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_3_3_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]}]
            },
            {
                id: 'c2_4',
                classes: '',
                td_arr: [
                    {id: 'c2_4_1', type: 'NormalTD', text: 'Workforce capabilities(Who’s equipped)', classes: 'th-blue'},
                    {id: 'c2_4_2', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_4_2_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]},
                    {id: 'c2_4_3', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_4_3_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]}]
            },
            {
                id: 'c2_5',
                classes: '',
                td_arr: [
                    {id: 'c2_5_1', type: 'NormalTD', text: 'Recognition & consequences(What’s reinforced)', classes: 'th-blue'},
                    {id: 'c2_5_2', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_5_2_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]},
                    {id: 'c2_5_3', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_5_3_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]}]
            },
            {
                id: 'c2_6',
                classes: '',
                td_arr: [
                    {id: 'c2_6_1', type: 'NormalTD', text: 'Practices & procedures(What’s habitual)', classes: 'th-blue'},
                    {id: 'c2_6_2', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_6_2_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]},
                    {id: 'c2_6_3', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_6_3_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]}],
            },
            {
                id: 'c2_7',
                classes: '',
                td_arr: [
                    {id: 'c2_7_1', type: 'NormalTD', text: 'Underpinning structures(What enables)', classes: 'th-blue'},
                    {id: 'c2_7_2', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_7_2_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]},
                    {id: 'c2_7_3', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_7_3_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]}]
            },
            {
                id: 'c2_8',
                classes: '',
                td_arr: [
                    {id: 'c2_8_1', type: 'NormalTD', text: 'Monitor & evolve(What’s measured)', classes: 'th-blue'},
                    {id: 'c2_8_2', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_8_2_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]},
                    {id: 'c2_8_3', type: 'EmbededTD', classes: 'td-blue td-embed', 
                    embed: [
                        {id: 'c2_8_3_1', type: 'PdfTextArea', classes: 'form-control embed_component'},
                    ]}]
            },
        ],
    },
    {
        id: 'c3',
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

        }
    },
    {
        id: 'c5',
        type: 'Button',
        classes: 'btn btn-primary',
        value: 'Download PDF',
        extra: {

        }

    }

];