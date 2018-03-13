export const components = [
    {
        id: 'c1',
        type: 'PdfTextArea',
        input: 'YES',
        classes: "form-control pdftextarea ta_medium",
        extra_data: {
            label: 'What is the problem or goal?',
            question: 'Current situation: What is happening now; what is problematic?  Desired future: What is the business need; What does the context/strategy call for?',
        }
    },
    {
        id: 'c2',
        type: 'PdfTable',
        classes: "table pdftable",
        tr_arr: [
            {
                id: 'c2_1',
                classes: '',
                td_arr: [
                    {id: 'c2_1_1', text: 'Lever', classes: 'th-black'},
                    {id: 'c2_1_2', text: 'What’s happening now?', classes: 'td-black'},
                    {id: 'c2_1_3', text: 'What could you do?', classes: 'td-black'}]
            },
            {
                id: 'c2_2',
                classes: '',
                td_arr: [
                    {id: 'c2_2_1', text: 'Leadership commitment(What’s modelled)', classes: 'th-blue'},
                    {id: 'c2_2_2', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {id: 'c2_2_3', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                id: 'c2_3',
                classes: '',
                td_arr: [
                    {id: 'c2_3_1', text: 'Values & behaviours(What’s expected)', classes: 'th-blue'},
                    {id: 'c2_3_2', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {id: 'c2_3_3', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                id: 'c2_4',
                classes: '',
                td_arr: [
                    {id: 'c2_4_1', text: 'Workforce capabilities(Who’s equipped)', classes: 'th-blue'},
                    {id: 'c2_4_2', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {id: 'c2_4_3', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                id: 'c2_5',
                classes: '',
                td_arr: [
                    {id: 'c2_5_1', text: 'Recognition & consequences(What’s reinforced)', classes: 'th-blue'},
                    {id: 'c2_5_2', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {id: 'c2_5_3', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                id: 'c2_6',
                classes: '',
                td_arr: [
                    {id: 'c2_6_1', text: 'Practices & procedures(What’s habitual)', classes: 'th-blue'},
                    {id: 'c2_6_2', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {id: 'c2_6_3', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}],
            },
            {
                id: 'c2_7',
                classes: '',
                td_arr: [
                    {id: 'c2_7_1', text: 'Underpinning structures(What enables)', classes: 'th-blue'},
                    {id: 'c2_7_2', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {id: 'c2_7_3', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
            {
                id: 'c2_8',
                classes: '',
                td_arr: [
                    {id: 'c2_8_1', text: 'Monitor & evolve(What’s measured)', classes: 'th-blue'},
                    {id: 'c2_8_2', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'},
                    {id: 'c2_8_3', text: '', classes: 'td-blue td-embed', embed: 'textarea', input: 'YES'}]
            },
        ],
    },
    {
        id: 'c3',
        type: 'PdfTextArea',
        input: 'YES',
        classes: "form-control pdftextarea ta_medium",
        extra_data: {
            label: 'Action you can take?',
            question: '(Clarify business need; Further investigation to identify levers in play; Explore areas where levers are having different impact; Other…)',
        }
        
    }

];