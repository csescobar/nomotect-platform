<template>
    <div class="col-lg-12 control-section">
        <div class="default-aiassistview">
            <div id="overview_aiassist">
                <div class="aiassist-sidebar">
                    <h3>Notes</h3>
                    <div class="e-skeleton e-skeleton-text" style="height: 15px; width: 100%;"></div>
                    <div class="e-skeleton e-skeleton-text" style="height: 15px; width: 80%;"></div>
                    <div class="e-skeleton e-skeleton-text" style="height: 15px; width: 100%;"></div>
                </div>
                <div id="target" class="aiassist-overview-control">
                    <div class="notes-container">
                        <h3>New Note</h3>
                        <h5>Open AI Assist and copy the response to get updated here.</h5>
                        <div class="copied-content"></div>
                    </div>
                    <ejs-dialog id="dialogElement" ref="dialog" style="height: 550px; width: 560px;" width="80vh" height="70vh" target="#target" visible="false">
                        <ejs-aiassistview style="border: none;" id="aiassist-overview-sample" ref="aiassist" :promptSuggestions="suggestion" :prompts="promptsData" :promptRequest="onPromptRequest" :toolbarSettings="assistViewToolbarSettings" :responseToolbarSettings="responseToolbarSettings" :created="onCreated"></ejs-aiassistview>
                    </ejs-dialog>
                    <ejs-fab id="fab" iconCss='e-icons e-aiassist-chat' target='#overview_aiassist' (click)="fabClick()"></ejs-fab>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { FabComponent } from "@syncfusion/ej2-vue-buttons";

let copiedTextArea;
const prompts = [
    {
        prompt: "How do I set daily goals in my work day?",
        response: "<p>To stay focused and productive, try these steps for setting daily goals:</p> <ol><li><strong>Identify Priorities:</strong> List the most important tasks based on deadlines or significance.</li> <li><strong>Break Down Tasks:</strong> Split larger tasks into smaller, manageable steps.</li> <li><strong>Set SMART Goals:</strong> Make sure goals are Specific, Measurable, Achievable, Relevant, and Time-bound.</li> <li><strong>Time Blocking:</strong> Allocate specific times for each task to stay organized and on track.</li></ol> <p>Would you like more tips on any of these steps?</p>",
        suggestionData: ["How do I prioritize tasks effectively?", "What tools or apps can help me prioritize tasks?"]
    },
    {
        prompt: "Steps to publish a e-book with marketing strategy",
        response: "<p>To publish an e-book, follow the steps below:</p> <ol><li><strong>Write and format your e-book:</strong> Ensure your content is well-organized, edited, and formatted for digital reading.</li> <li><strong>Choose a publishing platform:</strong> Platforms like Amazon Kindle Direct Publishing (KDP) or Smashwords can help you publish and distribute your e-book.</li> <li><strong>Develop a marketing strategy:</strong> Utilize social media, email newsletters, and book promotion sites to create buzz and reach your target audience.</li> <li><strong>Launch and promote:</strong> Schedule a launch date, gather reviews, and continue promoting through various channels to maintain momentum and drive sales.</li></ol> <p>Do you have a specific topic in mind for your e-book?</p>",
        suggestionData: ["How do I create an eye-catching e-book cover?", "What are common mistakes to avoid in e-book covers?"]
    },
    {
        prompt: "How do I prioritize tasks effectively?",
        response: "<p>To stay focused and productive, set daily goals by:</p> <ol><li><strong>Identifying Priorities:</strong> List important tasks based on deadlines or significance.</li> <li><strong>Breaking Down Tasks:</strong> Divide larger tasks into smaller, manageable steps.</li> <li><strong>Setting SMART Goals:</strong> Ensure goals are Specific, Measurable, Achievable, Relevant, and Time-bound. </li> <li><strong>Time Blocking:</strong>Schedule specific times for each task to stay organized.</li></ol> <p> Need more tips on any of these steps? </p>",
        suggestionData: []
    },
    {
        prompt: "What tools or apps can help me prioritize tasks?",
        response: "<p>Here are some tools to help you prioritize tasks effectively:</p> <ol><li><strong>Google Keep:</strong> For simple note-taking and task organization with labels and reminders.</li> <li><strong>Scoro:</strong> A project management tool for streamlining activities and team collaboration.</li> <li><strong>Evernote:</strong> Great for note-taking, to-do lists, and reminders.</li> <li><strong>Todoist:</strong> A powerful task manager for setting priorities and tracking progress.</li></ol> <p>Are you looking for tools to manage a specific type of task or project?</p>",
        suggestionData: []
    },
    {
        prompt: "How do I create an eye-catching e-book cover?",
        response: "<p>Creating an eye-catching e-book cover involves a few key steps:</p> <ol><li><strong>Understand your genre and audience:</strong> Research covers of popular books in your genre to see what appeals to your target readers.</li> <li><strong>Choose the right imagery and colors:</strong> Use high-quality images and a color scheme that reflects the tone and theme of your book.</li> <li><strong>Focus on typography:</strong> Select fonts that are readable and complement the overall design. The title should be prominent and easy to read even in thumbnail size.</li> <li><strong>Use design tools or hire a professional:</strong> Tools like Canva or Adobe Spark can help you create a professional-looking cover. Alternatively, consider hiring a graphic designer for a more polished result.</li></ol> <p>Would you like some tips on where to find good images or fonts for your cover?</p>",
        suggestionData: []
    },
    {
        prompt: "What are common mistakes to avoid in e-book covers?",
        response: "<p>Here are some common mistakes to avoid when designing an e-book cover:</p> <ol><li><strong>Cluttered design:</strong> Overloading the cover with too many elements can make it look messy and unprofessional. Keep it simple and focused.</li> <li><strong>Poor quality images:</strong> Using low-resolution or generic stock images can detract from the overall appeal. Always opt for high-quality, relevant visuals.</li> <li><strong>Unreadable fonts:</strong> Fancy or overly intricate fonts can be hard to read, especially in thumbnail size. Choose clear, legible fonts for the title and author name.</li> <li><strong>Ignoring genre conventions:</strong> Each genre has its own visual cues. Not adhering to these can confuse potential readers about the book’s content.</li> <li><strong>Inconsistent branding:</strong> If you have a series or multiple books, ensure a consistent style across all covers to build a recognizable brand.</li></ol> <p>Would you like any specific advice on designing your cover?</p>",
        suggestionData: []
    }
];
export default {
    components: { 
        'ejs-aiassistview': AIAssistViewComponent,
        'ejs-dialog': DialogComponent,
        'ejs-fab': FabComponent
    },

    data: function () {
        return {
            suggestion: [
                "How do I set daily goals in my work day?", 
                "Steps to publish a e-book with marketing strategy"
            ],
            promptsData: [
                {
                    response: "Ask Questions, to better understand how your prompt interacts with AI-generated or default data responses..!"
                }
            ],
            prompts: prompts,
            responseToolbarSettings: {
                itemClicked: (args) => {
                    if (args.item.iconCss === 'e-icons e-aiassist-copy') {
                        this.updateCopiedContent();
                    }
                }
            },
            assistViewToolbarSettings: {
                itemClicked: function (args) {
                    if(args.item.iconCss === "e-icons e-close") {
                        this.$refs.dialog.ej2Instances.visible = false;
                    }
                },
                items: [
                    { type: 'Button', iconCss: 'e-icons e-close', align: 'Right' }
                ]
            }
        };
    },
    methods: {
        onPromptRequest: function (args) {
            let defaultAiassist = this.$refs.aiassist.ej2Instances;
            setTimeout(function () {
                var foundPrompt = prompts.find((promptObj) => promptObj.prompt === args.prompt);

                if (foundPrompt) {
                    defaultAiassist.addPromptResponse(foundPrompt.response);
                    defaultAiassist.promptSuggestions = foundPrompt.suggestionData;
                }
                else { 
                    defaultAiassist.addPromptResponse("<p>For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.</p>"); 
                    defaultAiassist.promptSuggestions = this.suggestion;
                }
            }, 2000);
        },
        onCreated: function() {
            copiedTextArea = document.querySelector('.copied-content');
        },
        updateCopiedContent: async function () {
            copiedTextArea.innerHTML += await window.navigator.clipboard.readText();
        },
        fabClick: function () {
            this.$refs.dialog.ej2Instances.visible = true;
        }
    }
};
</script>

<style>
    #overview_aiassist {
        width: 70%;
        margin: 0 auto;
        height: 80vh;
        display: flex;
        border: 1px solid #d1d1d1;
        border-radius: 10px;
        position: relative;
    }
    .aiassist-overview-control {
        width: 70%;
        position: relative;
        padding: 10px;
    }
    .aiassist-sidebar {
        background-color: #fbf8f8;
        width: 20%;
        padding: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .notes-container {
        overflow: auto;
        height: 100%;
    }
    .aiassist-overview-control .e-dialog .e-dlg-content {
        padding: 0;
    }
    @media (max-width: 750px) {
        .aiassist-overview-control {
            width: 90%;
        }
        .aiassist-sidebar {
            display: none;
        }
        .aiassist-overview-control .e-dialog .e-dlg-content {
            padding: 10px;
        }
    }
    body[class*="-dark"] #overview_aiassist {
        border: 1px solid #8c8c8c;
    }
    body[class*="-dark"] .aiassist-sidebar {
        background-color: #3a3a3a;
    }
</style>