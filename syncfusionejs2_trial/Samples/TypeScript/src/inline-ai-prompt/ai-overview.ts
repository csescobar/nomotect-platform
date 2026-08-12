import { loadCultureFiles } from '../common/culture-loader';

import { InlineAIPrompt, InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { Button } from '@syncfusion/ej2-buttons';
import { getUserID, AI_SERVICE_URL } from '../common/ai-service';

(window as any).default = (): void => {
    loadCultureFiles();

    let selectedCommandText: string = '';
    let currentHoveredParagraph: HTMLParagraphElement | null = null;
    let isGlobalRequest: boolean = false;
    let isPopupOpen: boolean = false;
    let abortController: AbortController | undefined;

    const initialEmailContent: string = "<p>\nDear Team,\n</p>\n<p>\nI hope this email finds you well. I wanted to provide you with an update on our current project status. We successfully completed Phase 1 last week, and I'm pleased to share that all deliverables were met according to schedule. The client presentation went well and they expressed satisfaction with our progress.\n</p>\n<p>\nAs we move forward into Phase 2, I would appreciate it if everyone could submit their progress reports by Friday. Additionally, we should schedule a team meeting next week to discuss the upcoming timeline and address any questions or concerns you may have.\n</p>\n<p>\nThank you for your continued dedication and hard work on this project.\n</p>\n<p>\nBest regards,<br>\nProject Management Team\n</p>";

    const commandSettings: any = {
        commands: [
            {
                id: 'summarize',
                label: 'Summarize',
                tooltip: 'Create a brief summary',
                prompt: 'Summarize the main points',
                iconCss: 'e-icons e-collapse-2'
            },
            {
                id: 'fix-grammar',
                label: 'Fix Grammar',
                tooltip: 'Correct grammar and spelling',
                prompt: 'Fix grammar, spelling, and punctuation errors',
                iconCss: 'e-icons e-grammar-check'
            },
            {
                id: 'make-professional',
                label: 'Make Professional',
                tooltip: 'Transform to formal business tone',
                prompt: 'Rewrite this in a professional, formal business tone',
                iconCss: 'e-icons e-annotation-edit'
            },
            {
                id: 'make-friendly',
                label: 'Make Friendly',
                tooltip: 'Make the tone more casual and friendly',
                prompt: 'Rewrite this in a friendly, casual tone',
                iconCss: 'e-icons e-ai-chat'
            }
        ],
        itemSelect: (args: any): void => {
            selectedCommandText = args.command.label || '';
        }
    };

    const inlinePrompt: InlineAIPrompt = new InlineAIPrompt({
        commandSettings: commandSettings,
        relateTo: '#emailContent',
        promptRequest: (args: InlinePromptRequestEventArgs): void => {
            getUserID().then((userID: string) => {
                try {
                    abortController = new AbortController();
                    let contentToProcess: string = '';

                    if (isGlobalRequest) {
                        const emailContentElem: HTMLElement | null = document.getElementById('emailContent');
                        contentToProcess = emailContentElem ? emailContentElem.innerText : '';
                    } else if (currentHoveredParagraph) {
                        contentToProcess = currentHoveredParagraph.innerText;
                    }

                    fetch(AI_SERVICE_URL + '/api/chat', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            visitorId: userID,
                            messages: {
                                messages: [
                                    { role: 'system', content: 'You are a helpful assistant.' },
                                    { role: 'user', content: args.prompt + (contentToProcess) }
                                ]
                            }
                        }),
                        signal: abortController.signal
                    })
                        .then((response: Response) => {
                            if (!response.ok) {
                                return response.json().then((errorData: any) => {
                                    throw new Error(errorData.error || ('HTTP Error ' + response.status));
                                });
                            }
                            return response.json();
                        })
                        .then((result: any) => {
                            if (result && result.response) {
                                const aiResponse: string = result.response.replace('END_INSERTION', '');
                                inlinePrompt.addResponse(aiResponse);
                            }
                        })
                        .catch((error: Error) => {
                            if (error.name === 'AbortError') {
                                console.log('AI Request aborted by user.');
                                return;
                            }
                            setTimeout(() => {
                                const fallbackResponse: string = 'We could not reach the AI service; please try again later.';
                                inlinePrompt.addResponse(fallbackResponse);
                                selectedCommandText = '';
                            }, 1000);
                        });
                } catch (error) {
                    console.error('Unexpected error:', error);
                }
            });
        },
        responseSettings: {
            itemSelect: (args: any): void => {
                if (args.command.label === 'Accept') {
                    if (isGlobalRequest) {
                        const emailContent: HTMLElement | null = document.getElementById('emailContent');
                        if (emailContent) {
                            emailContent.innerHTML = (inlinePrompt.prompts[inlinePrompt.prompts.length - 1] as any).response;
                            emailContent.querySelectorAll(':scope > p').forEach((para: Element) => attachHoverEvent(para as HTMLParagraphElement));
                        }
                    } else {
                        if (currentHoveredParagraph) {
                            currentHoveredParagraph.innerHTML = (inlinePrompt.prompts[inlinePrompt.prompts.length - 1] as any).response;
                        }
                    }
                    inlinePrompt.hidePopup();
                } else if (args.command.label === 'Discard') {
                    inlinePrompt.hidePopup();
                }
            }
        },
        open: (): void => {
            isPopupOpen = true;
        },
        close: (): void => {
            isPopupOpen = false;
            selectedCommandText = '';
            isGlobalRequest = false;
        }
    });

    inlinePrompt.appendTo('#inlinePrompt');

    // Create AI Assistant button
    let button: Button = new Button({
        iconCss: 'e-icons e-ai-chat',
        isPrimary: true
    });
    button.appendTo('#aiAssistantBtn');

    // Create Sparkle button
    button = new Button({
        iconCss: 'e-icons e-ai-chat',
        isPrimary: true
    });
    button.appendTo('#sparkleBtn');

    const sparkleButton: HTMLElement | null = document.querySelector('#sparkleBtn');
    const emailContent: HTMLElement | null = document.getElementById('emailContent');

    // Helper function to attach hover events to paragraphs
    const attachHoverEvent = (paragraph: HTMLParagraphElement): void => {
        paragraph.addEventListener('mouseenter', () => {
            if (!isPopupOpen && paragraph.parentElement?.classList.contains('email-body')) {
                currentHoveredParagraph = paragraph;
                const emailRect: DOMRect = paragraph.parentElement!.parentElement!.getBoundingClientRect();
                const rect: DOMRect = paragraph.getBoundingClientRect();
                const buttonHeight: number = 30;
                const topPosition: number = (rect.top - emailRect.top) + (rect.height / 2) - (buttonHeight / 2);

                if (sparkleButton) {
                    sparkleButton.style.position = 'absolute';
                    sparkleButton.style.left = '20px';
                    sparkleButton.style.top = topPosition + 'px';
                    sparkleButton.style.display = 'block';
                }
            }
        });
    };

    if (sparkleButton) {
        sparkleButton.addEventListener('mouseenter', () => {
            sparkleButton.style.display = 'block';
        });

        sparkleButton.addEventListener('mouseleave', () => {
            sparkleButton.style.display = 'none';
        });

        sparkleButton.addEventListener('click', () => {
            if (currentHoveredParagraph) {
                isGlobalRequest = false;
                inlinePrompt.relateTo = currentHoveredParagraph;
                inlinePrompt.dataBind();
                inlinePrompt.showPopup();
            }
        });
    }

    const aiAssistantBtn: HTMLElement | null = document.getElementById('aiAssistantBtn');
    if (aiAssistantBtn) {
        aiAssistantBtn.addEventListener('click', () => {
            isGlobalRequest = true;
            inlinePrompt.relateTo = aiAssistantBtn;
            inlinePrompt.dataBind();
            inlinePrompt.showPopup();
        });
    }

    const sendEmailBtn: HTMLElement | null = document.getElementById('sendEmailBtn');
    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', () => {
            const emailContentElem: HTMLElement | null = document.getElementById('emailContent');
            if (emailContentElem) {
                emailContentElem.innerHTML = initialEmailContent;
                emailContentElem.querySelectorAll(':scope > p').forEach((para: Element) => attachHoverEvent(para as HTMLParagraphElement));
                if (sparkleButton) {
                    sparkleButton.style.display = 'none';
                }
            }
        });
    }

    if (emailContent) {
        emailContent.querySelectorAll(':scope > p').forEach((para: Element) => attachHoverEvent(para as HTMLParagraphElement));

        emailContent.addEventListener('input', () => {
            if (sparkleButton) {
                sparkleButton.style.display = 'none';
            }
        });

        emailContent.addEventListener('mouseleave', (e: MouseEvent) => {
            if (sparkleButton && e.relatedTarget !== sparkleButton && !sparkleButton.matches(':hover')) {
                sparkleButton.style.display = 'none';
            }
        });

        new MutationObserver((mutations: MutationRecord[]) => {
            mutations.forEach((mutation: MutationRecord) => {
                mutation.addedNodes.forEach((node: Node) => {
                    if (node.nodeName === 'P') {
                        attachHoverEvent(node as HTMLParagraphElement);
                    }
                });
            });
        }).observe(emailContent, { childList: true, subtree: true });
    }

    if (sparkleButton) {
        sparkleButton.addEventListener('mouseenter', () => {
            sparkleButton.style.display = 'block';
        });

        sparkleButton.addEventListener('mouseleave', () => {
            sparkleButton.style.display = 'none';
        });
    }
};
