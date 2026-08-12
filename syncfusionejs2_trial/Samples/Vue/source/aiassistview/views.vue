<template>
    <div class="col-lg-12 control-section">
        <div class="views-container">
            <ejs-aiassistview id="aiAssist_views" :footerTemplate="footerTemplate" ref="aiassist" :created="onCreated">
                <e-views>
                    <e-view type="Assist" name="Prompt"></e-view>
                    <e-view type="Custom" name="Response" iconCss="e-icons e-comment-show" viewTemplate='<div id="custom-view"></div>'></e-view>
                </e-views>
            </ejs-aiassistview>
        </div>
    </div>
    <div id="action-description">
        <p>This sample showcases the AIAssistView component different views.</p>
    </div>
    <div id="description">
        <p></p>
    </div>
</template>
<script>
import { AIAssistViewComponent, ViewsDirective, ViewDirective } from "@syncfusion/ej2-vue-interactive-chat";
import { TextArea } from "@syncfusion/ej2-vue-inputs";
import { Button } from "@syncfusion/ej2-vue-buttons";

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
        'e-views': ViewsDirective,
        'e-view': ViewDirective
    },

    data: function () {
        return {
            footerTemplate: `<div class="custom-footer">
                <textarea id="textarea"></textarea>
                <button id="btn" style="margin-top: 10px">Generate Prompt</button>
            </div>`,
            textareaObj: new TextArea({
                placeholder: "Enter your prompt...",
                rows: 4,
                cols: 35,
                width: '100%',
                resizeMode: 'None'
            }),
            button: new Button({
                cssClass: `generate-btn e-primary`,
                content:'Generate Prompt'
            })
        };
    },
    methods: {

        onButtonClick: () => {
            let promptValue = textareaObj.value.trim();
            let defaultAiassist = this.$refs.aiassist.ej2Instances;
            if(promptValue) {
                this.promptsData.unshift(promptValue);
                defaultAiAssistView.activeView = 1;
                defaultAiAssistView.dataBind();
                this.textareaObj.value = "";
                this.updateViewTemplate();
            }
            else {
                defaultAiAssistView.activeView = 0;
            }
        },
        onCreated: () => {
            this.textareaObj.appendTo('#textarea');
            this.button.appendTo('#btn');
            document.getElementById('btn').addEventListener('click',() => {
                this.onButtonClick();
            })
        },
        updateViewTemplate: () => {
            var viewTemplate = document.getElementById('custom-view');
            var templateItem = '';
            this.promptsData.forEach((prompt, index) => {
                templateItem += `
                    <div class="custom-view-container">
                        <div class="prompt-header">${prompt}</div>
                        <div class="prompt-response">
                            <div class="response-text">${"For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services."}</div>
                            <button class="e-btn" id="copy-btn-${index}"><span class="e-icons e-aiassist-copy" style="padding: 4px;"></span>Copy</button>
                        </div>
                    </div>
                `
            });
            viewTemplate.innerHTML = templateItem;
            var copyButton = viewTemplate.querySelector('button');
            copyButton.addEventListener('click',() => {
                this.copyClick(viewTemplate.querySelector('.e-aiassist-copy'));
            })
        },
        copyClick: (copyButtonEle) => {
            const textToCopy = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.";
            navigator.clipboard.writeText(textToCopy);
            copyButtonEle.classList.remove('e-aiassist-copy');
            copyButtonEle.classList.add('e-aiassist-check');
            setTimeout(() => {
                copyButtonEle.classList.remove('e-aiassist-check');
                copyButtonEle.classList.add('e-aiassist-copy');
            }, 1000);
        }
    }
};
</script>

<style>
    .custom-footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .views-container {
        height: 225px;
        width: 50%;
        margin: 25px auto;
    }

    .e-aiassist-view .e-aiassist-footer .e-multi-line-input {
        margin: 0;
    }

    .views-container #custom-view {
        width: 86%;
        margin: 18px auto 5px;
    }

    .custom-view-container {
        margin: 10px;
        border-radius: 4px;
        border: 1px solid #d1d1d1;
    }
    .prompt-header {
        padding: 10px;
        border-bottom: 1px solid #d1d1d1;
    }

    .prompt-response {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .prompt-response button {
        width: max-content;
    }
    .custom-view-container {
        display: flex;
        flex-direction: column;
    }
    .response-text {
        margin-bottom: 5px;
        font-size: 14px;
    }
    @media (max-width: 750px) {
        .custom-footer {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }

        .generate-btn {
            align-self: auto;
        }
    }
    body[class*="-dark"] .custom-view-container {
        border: 1px solid #4a4a4a;
    }
    body[class*="-dark"] .prompt-header {
        border-bottom: 1px solid #4a4a4a;
    }
</style>