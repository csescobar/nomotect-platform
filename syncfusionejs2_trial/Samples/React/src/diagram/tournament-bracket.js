"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentBracket = void 0;
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
// Declare a variable to hold the instance of the DiagramComponent.
var diagramInstance;
// UEFA Champions League 2023-24 Tournament Data
var tournamentData = [
    // Round of 16 matches
    { id: 'round16_1', team1: 'BAYERN MUNCHEN', score1: 3, team2: 'LAZIO', score2: 1, winner: 'BAYERN MUNCHEN', matchType: 'round16' },
    { id: 'round16_2', team1: 'ARSENAL', score1: 1, shootoutTeam1: '4', team2: 'PORTO', score2: 1, shootoutTeam2: '2', winner: 'ARSENAL', matchType: 'round16' },
    { id: 'round16_3', team1: 'COPENHAGEN', score1: 2, team2: 'MANCHESTER CITY', score2: 6, winner: 'MANCHESTER CITY', matchType: 'round16' },
    { id: 'round16_4', team1: 'LEIPZIG', score1: 1, team2: 'REAL MADRID', score2: 2, winner: 'REAL MADRID', matchType: 'round16' },
    { id: 'round16_5', team1: 'BORUSSIA DORTMUND', score1: 3, team2: 'PSV EINDHOVEN', score2: 1, winner: 'BORUSSIA DORTMUND', matchType: 'round16' },
    { id: 'round16_6', team1: 'ATLETICO MADRID', score1: 2, shootoutTeam1: '3', team2: 'INTER MILAN', score2: 2, shootoutTeam2: '2', winner: 'ATLETICO MADRID', matchType: 'round16' },
    { id: 'round16_7', team1: 'REAL SOCIEDAD', score1: 1, team2: 'PARIS SAINT-GERMAIN', score2: 4, winner: 'PARIS SAINT-GERMAIN', matchType: 'round16' },
    { id: 'round16_8', team1: 'BARCELONA', score1: 4, team2: 'NAPOLI', score2: 2, winner: 'BARCELONA', matchType: 'round16' },
    // Quarterfinal matches
    { id: 'quarter1', team1: 'BAYERN MUNCHEN', score1: 3, team2: 'ARSENAL', score2: 2, winner: 'BAYERN MUNCHEN', matchType: 'quarterfinal' },
    { id: 'quarter2', team1: 'MANCHESTER CITY', score1: 4, shootoutTeam1: '3', team2: 'REAL MADRID', score2: 4, shootoutTeam2: '4', winner: 'REAL MADRID', matchType: 'quarterfinal' },
    { id: 'quarter3', team1: 'BORUSSIA DORTMUND', score1: 5, team2: 'ATLETICO MADRID', score2: 4, winner: 'BORUSSIA DORTMUND', matchType: 'quarterfinal' },
    { id: 'quarter4', team1: 'BARCELONA', score1: 4, team2: 'PARIS SAINT-GERMAIN', score2: 6, winner: 'PARIS SAINT-GERMAIN', matchType: 'quarterfinal' },
    // Semifinal matches
    { id: 'semi1', team1: 'BAYERN MUNCHEN', score1: 3, team2: 'REAL MADRID', score2: 4, winner: 'REAL MADRID', matchType: 'semifinal' },
    { id: 'semi2', team1: 'PARIS SAINT-GERMAIN', score1: 0, team2: 'BORUSSIA DORTMUND', score2: 2, winner: 'BORUSSIA DORTMUND', matchType: 'semifinal' },
    // Final match
    { id: 'final', team1: 'REAL MADRID', score1: 2, team2: 'BORUSSIA DORTMUND', score2: 0, winner: 'REAL MADRID', matchType: 'final' },
    // Champion
    { id: 'champion', team1: 'REAL MADRID', team2: 'BORUSSIA DORTMUND', score1: 2, score2: 0, winner: 'REAL MADRID', year: '2023-24', matchType: 'champion' }
];
// Create detailed tooltip content for match information
function createTooltipContent(data) {
    var tooltipDiv = document.createElement('div');
    tooltipDiv.classList.add('football-results-tooltip-content');
    tooltipDiv.style.cssText =
        'background: linear-gradient(135deg, #001122 0%, #003366 100%);' +
            'border-radius: 12px; padding: 16px; color: white;' +
            'font-family: "Verdana", sans-serif; min-width: 300px; max-width: 380px;' +
            'box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative; z-index: 1000;';
    var matchTypeDisplay = data.matchType === 'round16' ? 'ROUND OF 16' :
        data.matchType === 'quarterfinal' ? 'QUARTER-FINAL' :
            data.matchType === 'semifinal' ? 'SEMI-FINAL' :
                data.matchType === 'final' ? 'FINAL' :
                    data.matchType === 'champion' ? 'CHAMPION' : data.matchType.toUpperCase();
    var hasShootout = data.shootoutTeam1 && data.shootoutTeam2;
    var shootoutDisplay = hasShootout ?
        '<div style="font-size: 11px; color: #87CEEB; margin-top: 8px; text-align: center;">' +
            '<span style="color: #FFD700;">Penalty Shootout:</span> ' + data.shootoutTeam1 + ' - ' + data.shootoutTeam2 +
            '</div>' : '';
    var team1WinnerStyle = data.winner === data.team1 ? 'color: #FFD700; font-weight: bold;' : '';
    var team2WinnerStyle = data.winner === data.team2 ? 'color: #FFD700; font-weight: bold;' : '';
    tooltipDiv.innerHTML =
        '<div style="text-align: center;">' +
            '<div style="font-size: 11px; font-weight: bold; color: #FFD700; margin-bottom: 6px; letter-spacing: 1px;">UEFA CHAMPIONS LEAGUE</div>' +
            '<div style="font-size: 10px; color: #87CEEB; margin-bottom: 12px; font-weight: 600;">' + matchTypeDisplay + '</div>' +
            '<div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 12px; margin-bottom: 10px;">' +
            '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">' +
            '<div style="flex: 1; text-align: left;"><div style="font-size: 14px; font-weight: bold; ' + team1WinnerStyle + '">' + data.team1 + '</div></div>' +
            '<div style="font-size: 20px; font-weight: bold; color: #fff; margin: 0 15px;">' + data.score1 + '</div>' +
            '</div>' +
            '<div style="text-align: center; margin: 8px 0;">' +
            '<div style="height: 1px; background: linear-gradient(90deg, transparent, #FFD700, transparent);"></div>' +
            '<div style="font-size: 10px; color: #87CEEB; margin: 4px 0;">VS</div>' +
            '<div style="height: 1px; background: linear-gradient(90deg, transparent, #FFD700, transparent);"></div>' +
            '</div>' +
            '<div style="display: flex; justify-content: space-between; align-items: center;">' +
            '<div style="flex: 1; text-align: left;"><div style="font-size: 14px; font-weight: bold; ' + team2WinnerStyle + '">' + data.team2 + '</div></div>' +
            '<div style="font-size: 20px; font-weight: bold; color: #fff; margin: 0 15px;">' + data.score2 + '</div>' +
            '</div>' +
            shootoutDisplay +
            '</div>' +
            '<div style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); color: #001122; padding: 8px 12px; border-radius: 6px; font-weight: bold; font-size: 12px;">' +
            'WINNER: ' + data.winner +
            '</div>' +
            '</div>';
    return tooltipDiv;
}
// Generate HTML template for tournament nodes
function getNodeTemplate(data) {
    if (data.matchType === 'champion') {
        return '<div class="tournament-node champion-node" data-id="' + data.id + '">' +
            '<div class="champion-container">' +
            '<div class="champion-badge"><div class="champion-trophy">🏆</div></div>' +
            '<div class="champion-title">CHAMPION</div>' +
            '<div class="champion-info" style="opacity: 0;">' +
            '<div class="champion-team">' + (data.winner || 'TBD') + '</div>' +
            '<div class="champion-year">' + (data.year || '2024') + '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    var team1Class = data.winner === data.team1 ? 'winner' : '';
    var team2Class = data.winner === data.team2 ? 'winner' : '';
    var roundDisplayName = data.matchType === 'round16' ? 'ROUND OF 16' :
        data.matchType === 'quarterfinal' ? 'QUARTER-FINAL' :
            data.matchType === 'semifinal' ? 'SEMI-FINAL' :
                data.matchType === 'final' ? 'FINAL' : 'MATCH';
    return '<div class="tournament-node ' + data.matchType + '-node" data-id="' + data.id + '">' +
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
        '<div class="flip-card-front">' +
        '<div style="height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 51, 102, 0.9) 0%, rgba(0, 68, 136, 0.9) 100%);">' +
        '<div style="text-align: center; color: #cbe5feff; font-weight: 600; font-size: 16px; letter-spacing: 2px; text-shadow: 0 2px 4px rgba(0, 14, 87, 0.7);">' + roundDisplayName + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="flip-card-back">' +
        '<div class="team-section team-top ' + team1Class + '">' +
        '<span class="team-name">' + (data.team1 || 'TBD') + '</span>' +
        '<span class="team-score score-right">' + (data.score1 !== undefined ? data.score1 : '') + '</span>' +
        '</div>' +
        '<div class="team-section team-bottom ' + team2Class + '">' +
        '<span class="team-name">' + (data.team2 || 'TBD') + '</span>' +
        '<span class="team-score score-right">' + (data.score2 !== undefined ? data.score2 : '') + '</span>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
}
// Find tournament data by ID with fallback
function findData(id) {
    var found = tournamentData.find(function (item) { return item.id === id; });
    if (found)
        return found;
    return {
        id: id,
        team1: 'TBD',
        team2: 'TBD',
        score1: 0,
        score2: 0,
        winner: '',
        matchType: id.includes('round16') ? 'round16' :
            id.includes('quarter') ? 'quarterfinal' :
                id.includes('semi') ? 'semifinal' :
                    id.includes('final') ? 'final' : 'round16'
    };
}
// CSS styles for the tournament diagram
var TOURNAMENT_CSS = "\n\n        .tournament-result-container {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            height: 100vh;\n            overflow: hidden;\n            font-family: 'Verdana', sans-serif;\n            background: linear-gradient(135deg, #001122 0%, #003366 25%, #004488 50%, #003366 75%, #001122 100%);\n            position: relative;\n        }\n\n        /* UEFA Champions League themed animated background */\n        .tournament-result-container::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: \n                radial-gradient(circle at 20% 80%, rgba(0, 51, 102, 0.6) 0%, transparent 50%),\n                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),\n                radial-gradient(circle at 40% 40%, rgba(0, 68, 136, 0.4) 0%, transparent 50%);\n            pointer-events: none;\n        }\n\n        /* UEFA Stars Pattern */\n        .tournament-result-container::after {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-image: \n                radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),\n                radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),\n                radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.4), transparent),\n                radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.3), transparent);\n            background-repeat: repeat;\n            background-size: 150px 100px;\n            animation: starTwinkle 8s ease-in-out infinite;\n            pointer-events: none;\n        }\n\n        @keyframes starTwinkle {\n            0%, 100% { opacity: 0.3; }\n            50% { opacity: 0.8; }\n        }\n\n        .tournament-result-container .sample-section {\n            height: 100vh;\n            display: flex;\n            flex-direction: column;\n            position: relative;\n            z-index: 1;\n        }\n\n        .tournament-result-container #footballResultDiagram {\n            flex: 1;\n            width: 100%;\n            background: transparent;\n        }\n        \n        .tournament-result-container #footballResultDiagramcontent{\n            overflow: hidden !important;\n            animation: zoomOutEffect 3s ease-out;\n        }\n\n        @keyframes zoomOutEffect {\n            0% { \n                transform: scale(1.3);\n                opacity: 0.8;\n            }\n            100% { \n                transform: scale(1);\n                opacity: 1;\n            }\n        }\n\n        /* Enhanced Tournament node styles with UEFA theme */\n        .tournament-result-container .tournament-node {\n            cursor: pointer;\n            width: 100%;\n            height: 100%;\n            border-radius: 12px;\n            overflow: hidden;\n            position: relative;\n            min-width: 110px;\n            min-height: 55px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            box-shadow: \n                0 8px 25px rgba(0, 0, 0, 0.4),\n                0 0 20px rgba(255, 255, 255, 0.1);\n            border: 2px solid rgba(255, 255, 255, 0.2);\n        }\n\n        .tournament-result-container .tournament-node:hover {\n            transform: translateY(-8px) scale(1.08);\n            box-shadow: \n                0 25px 50px rgba(0, 0, 0, 0.6),\n                0 0 40px rgba(0, 102, 204, 0.5),\n                inset 0 1px 0 rgba(255, 255, 255, 0.3);\n            transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);\n            border-color: rgba(0, 102, 204, 0.8);\n        }\n\n        /* Enhanced flip card animation */\n        .tournament-result-container .flip-card {\n            width: 100%;\n            height: 100%;\n            position: relative;\n            perspective: 1200px;\n        }\n\n        .tournament-result-container .flip-card-inner {\n            width: 100%;\n            height: 100%;\n            transition: transform 0.9s cubic-bezier(0.4,0,0.2,1);\n            transform-style: preserve-3d;\n            position: relative;\n            transform: rotateY(0deg); /* Start showing front */\n            animation: delayedFlip 0.6s cubic-bezier(0.4,0,0.2,1) both; /* Reduced from 0.9s */\n        }\n\n        .tournament-result-container .flip-card-inner .flip-card-front,\n        .tournament-result-container .flip-card-inner .flip-card-back {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0; \n            left: 0;\n            backface-visibility: hidden;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            overflow: hidden;\n        }\n\n        .tournament-result-container .flip-card-inner .flip-card-front {\n            z-index: 2;\n            background: linear-gradient(135deg, rgba(0, 51, 102, 0.9) 0%, rgba(0, 68, 136, 0.9) 100%);\n        }\n\n        .tournament-result-container .flip-card-inner .flip-card-back {\n            transform: rotateY(180deg);\n            z-index: 1;\n            background: linear-gradient(135deg, rgba(0, 51, 102, 0.95) 0%, rgba(0, 68, 136, 0.95) 100%);\n        }\n\n        /* UEFA Champions League themed team sections */\n        .tournament-result-container .team-section {\n            height: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: flex-start;\n            font-weight: 700;\n            font-size: 14px;\n            color: white;\n            padding: 0 15px;\n            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);\n            position: relative;\n            border: none;\n            background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%);\n        }\n\n        .tournament-result-container .team-section .team-name {\n            flex: 1 1 auto;\n            text-align: left;\n            font-weight: 800;\n            letter-spacing: 0.8px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            padding-right: 40px;\n            text-transform: uppercase;\n        }\n\n        .tournament-result-container .team-section .team-score.score-right {\n            position: absolute;\n            right: 15px;\n            font-size: 16px;\n            font-weight: 900;\n            color: #fff !important;\n            text-shadow: 0 2px 4px rgba(0,0,0,0.5);\n            min-width: 25px;\n            text-align: right;\n            z-index: 2;\n            background: rgba(0, 0, 0, 0.3);\n            padding: 2px 6px;\n            border-radius: 4px;\n        }\n\n        /* Enhanced Winner highlighting with UEFA colors */\n        .tournament-result-container .team-section.winner {\n            background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%) !important;\n            color: #1a1a1a !important;\n            box-shadow: \n                0 0 20px rgba(255, 215, 0, 0.6),\n                inset 0 2px 0 rgba(255, 255, 255, 0.4),\n                inset 0 -1px 0 rgba(0, 0, 0, 0.2);\n            font-weight: 900;\n            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n            animation: winnerGlow 2s ease-in-out infinite alternate;\n        }\n\n        .tournament-result-container .team-section.winner .team-name,\n        .tournament-result-container .team-section.winner .team-score {\n            text-shadow: 0 1px 2px rgba(67, 55, 0, 0.5);\n            font-weight: 900;\n        }\n\n        @keyframes winnerGlow {\n            0% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), inset 0 2px 0 rgba(255, 255, 255, 0.4); }\n            100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.9), inset 0 2px 0 rgba(255, 255, 255, 0.6); }\n        }\n\n        /* UEFA themed gradient colors for different rounds */\n        .tournament-result-container .round16-node .team-section.team-top {\n            background: linear-gradient(135deg, #003366 0%, #0066cc 100%);\n        }\n        .tournament-result-container .round16-node .team-section.team-bottom {\n            background: linear-gradient(135deg, #004488 0%, #0077dd 100%);\n        }\n\n        .tournament-result-container .quarterfinal-node .team-section.team-top {\n            background: linear-gradient(135deg, #001a33 0%, #004080 100%);\n        }\n        .tournament-result-container .quarterfinal-node .team-section.team-bottom {\n            background: linear-gradient(135deg, #002244 0%, #0055aa 100%);\n        }\n\n        .tournament-result-container .semifinal-node .team-section.team-top {\n            background: linear-gradient(135deg, #000d1a 0%, #003366 100%);\n        }\n        .tournament-result-container .semifinal-node .team-section.team-bottom {\n            background: linear-gradient(135deg, #001122 0%, #004488 100%);\n        }\n\n        .tournament-result-container .final-node .team-section.team-top {\n            background: linear-gradient(135deg, #000611 0%, #002244 100%);\n        }\n        .tournament-result-container .final-node .team-section.team-bottom {\n            background: linear-gradient(135deg, #000a1a 0%, #003366 100%);\n        }\n\n        /* Enhanced Champion Node with UEFA styling */\n        .tournament-result-container .champion-node {\n            background: linear-gradient(135deg, #001122 0%, #003366 50%, #0066cc 100%);\n            border: 4px solid #FFD700;\n            border-radius: 20px;\n            position: relative;\n            overflow: visible;\n            animation: championGlow 3s ease-in-out infinite;\n            box-shadow: \n                0 20px 50px rgba(0, 102, 204, 0.5),\n                0 0 40px rgba(255, 215, 0, 0.4),\n                inset 0 2px 0 rgba(255, 255, 255, 0.3);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .tournament-result-container .champion-container {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            padding: 25px 20px;\n        }\n\n        .tournament-result-container .champion-badge {\n            background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%);\n            border-radius: 50%;\n            width: 60px;\n            height: 60px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-bottom: 12px;\n            box-shadow: \n                0 10px 25px rgba(0, 0, 0, 0.3),\n                inset 0 2px 0 rgba(255, 255, 255, 0.6),\n                0 0 20px rgba(255, 215, 0, 0.5);\n            flex-shrink: 0;\n            border: 3px solid #fff;\n        }\n\n        .tournament-result-container .champion-trophy {\n            font-size: 38px;\n            animation: trophyBounce 2s ease-in-out infinite;\n            transform-origin: center bottom;\n        }\n\n        @keyframes trophyBounce {\n            0%, 20%, 50%, 80%, 100% {\n                transform: translateY(0) scale(1);\n            }\n            40% {\n                transform: translateY(-10px) scale(1.1);\n            }\n            60% {\n                transform: translateY(-5px) scale(1.05);\n            }\n        }\n\n        .tournament-result-container .champion-title {\n            font-family: 'Verdana', sans-serif;\n            font-size: 18px;\n            font-weight: 900;\n            color: #FFD700;\n            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);\n            margin-bottom: 10px;\n            letter-spacing: 3px;\n            line-height: 1.2;\n            text-transform: uppercase;\n        }\n\n        .tournament-result-container .champion-team {\n            font-family: 'Verdana', sans-serif;\n            font-size: 20px;\n            font-weight: 900;\n            color: #ffffff;\n            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);\n            letter-spacing: 1.5px;\n            line-height: 1.1;\n            margin-bottom: 6px;\n            text-transform: uppercase;\n        }\n\n        .tournament-result-container .champion-year {\n            font-size: 12px;\n            color: rgba(255, 255, 255, 0.9);\n            font-weight: 700;\n            letter-spacing: 2px;\n            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);\n        }\n\n        .tournament-result-container .team-score.score-right {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n        /* Enhanced Champion Animations */\n        @keyframes championGlow {\n            0%, 100% { \n                box-shadow: \n                    0 20px 50px rgba(0, 102, 204, 0.5),\n                    0 0 40px rgba(255, 215, 0, 0.4),\n                    inset 0 2px 0 rgba(255, 255, 255, 0.3);\n                border-color: #FFD700;\n            }\n            50% { \n                box-shadow: \n                    0 25px 60px rgba(0, 102, 204, 0.7),\n                    0 0 60px rgba(255, 215, 0, 0.7),\n                    inset 0 2px 0 rgba(255, 255, 255, 0.5);\n                border-color: #FFA500;\n            }\n        }\n\n        /* Progressive flip animation delays */\n        .tournament-result-container .round16-node .flip-card-inner:nth-of-type(1) { animation-delay: 0.3s; }\n        .tournament-result-container .round16-node .flip-card-inner:nth-of-type(2) { animation-delay: 0.4s; }\n        .tournament-result-container .round16-node .flip-card-inner:nth-of-type(3) { animation-delay: 0.5s; }\n        .tournament-result-container .round16-node .flip-card-inner:nth-of-type(4) { animation-delay: 0.6s; }\n        .tournament-result-container .round16-node .flip-card-inner:nth-of-type(5) { animation-delay: 0.7s; }\n        .tournament-result-container .round16-node .flip-card-inner:nth-of-type(6) { animation-delay: 0.8s; }\n        .tournament-result-container .round16-node .flip-card-inner:nth-of-type(7) { animation-delay: 0.9s; }\n        .tournament-result-container .round16-node .flip-card-inner:nth-of-type(8) { animation-delay: 1.0s; }\n\n        .tournament-result-container .quarterfinal-node .flip-card-inner:nth-of-type(1) { animation-delay: 1.3s; }\n        .tournament-result-container .quarterfinal-node .flip-card-inner:nth-of-type(2) { animation-delay: 1.4s; }\n        .tournament-result-container .quarterfinal-node .flip-card-inner:nth-of-type(3) { animation-delay: 1.5s; }\n        .tournament-result-container .quarterfinal-node .flip-card-inner:nth-of-type(4) { animation-delay: 1.6s; }\n\n        .tournament-result-container .semifinal-node .flip-card-inner:nth-of-type(1) { animation-delay: 1.9s; }\n        .tournament-result-container .semifinal-node .flip-card-inner:nth-of-type(2) { animation-delay: 2.0s; }\n\n        .tournament-result-container .final-node .flip-card-inner { animation-delay: 2.6s; }\n\n        .tournament-result-container .champion-node .champion-info {\n            animation: championReveal 0.8s ease-in-out 2.8s both; /* Reduced from 5.2s */\n        }\n\n        @keyframes championReveal {\n            0% { opacity: 0; transform: scale(0.8); }\n            100% { opacity: 1; transform: scale(1); }\n        }\n\n        @keyframes delayedFlip {\n            0% { transform: rotateY(0deg); }\n            100% { transform: rotateY(180deg); }\n        }\n\n        .tournament-result-container .loading {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            color: #FFD700;\n            font-size: 22px;\n            letter-spacing: 2px;\n            font-family: 'Verdana', sans-serif;\n            text-align: center;\n            text-shadow: 0 3px 6px rgba(0,0,0,0.7);\n            font-weight: 700;\n            text-transform: uppercase;\n        }\n\n        /* Enhanced node decorations */\n        .tournament-result-container .tournament-node::after {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            height: 2px;\n            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);\n            z-index: 1;\n        }\n\n        /* Tooltip Styles */\n        /* Hide tooltip background */\n        .e-tooltip-wrap.e-popup.e-diagram-tooltip:has(.football-results-tooltip-content) {\n            background-color: transparent !important;\n            border:  none !important;\n            box-shadow: none !important;\n        }\n\n        .e-tooltip-wrap:has(.football-results-tooltip-content) .e-tip-content {\n            padding: 0px !important;\n        }\n\n        .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-inner.e-tip-right,\n        .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-inner.e-tip-left,\n        .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-inner.e-tip-bottom,\n        .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-inner.e-tip-top {\n            color: #001122 !important;\n        }\n\n        /* Outer arrow tips for different positions - only for football tooltips */\n        .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-outer.e-tip-top {\n            border-bottom-color: #001122 !important;\n        }\n\n        .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-outer.e-tip-bottom {\n            border-top-color: #001122 !important;\n        }\n\n        .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-outer.e-tip-left {\n            border-right-color: #001122 !important;\n        }\n\n        .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-outer.e-tip-right {\n            border-left-color: #001122 !important;\n        }\n\n        /* Define the stroke color change animation */\n        @keyframes pathStrokeActivate {\n            0% {\n                stroke: #0066cc; /* Original color */\n            }\n            100% {\n                stroke: #d2e8ff; /* Target color */\n            }\n        }\n        \n        /* Round of 16 to Quarter-final paths */\n        #quarter1_1_path { animation: pathStrokeActivate 0.2s ease-in-out 0.8s both; stroke-width: 3; }\n        #quarter1_2_path { animation: pathStrokeActivate 0.2s ease-in-out 0.9s both; stroke-width: 3; }\n        #quarter2_1_path { animation: pathStrokeActivate 0.2s ease-in-out 1.0s both; stroke-width: 3; }\n        #quarter2_2_path { animation: pathStrokeActivate 0.2s ease-in-out 1.1s both; stroke-width: 3; }\n        #quarter3_1_path { animation: pathStrokeActivate 0.2s ease-in-out 1.2s both; stroke-width: 3; }\n        #quarter3_2_path { animation: pathStrokeActivate 0.2s ease-in-out 1.3s both; stroke-width: 3; }\n        #quarter4_1_path { animation: pathStrokeActivate 0.2s ease-in-out 1.4s both; stroke-width: 3; }\n        #quarter4_2_path { animation: pathStrokeActivate 0.2s ease-in-out 1.5s both; stroke-width: 3; }\n        /* Quarter-final to Semi-final paths */\n        #semi1_1_path { animation: pathStrokeActivate 0.2s ease-in-out 1.8s both; stroke-width: 3; }\n        #semi1_2_path { animation: pathStrokeActivate 0.2s ease-in-out 1.9s both; stroke-width: 3; }\n        #semi2_1_path { animation: pathStrokeActivate 0.2s ease-in-out 2.0s both; stroke-width: 3; }\n        #semi2_2_path { animation: pathStrokeActivate 0.2s ease-in-out 2.1s both; stroke-width: 3; }\n        /* Semi-final to Final */\n        #final1_path    { animation: pathStrokeActivate 0.2s ease-in-out 2.4s both; stroke-width: 3; }\n        #final2_path    { animation: pathStrokeActivate 0.2s ease-in-out 2.5s both; stroke-width: 3; }\n        /* Final to Champion */\n        #champ1_path    { animation: pathStrokeActivate 0.2s ease-in-out 3.1s both; stroke-width: 3; }\n                \n        /* Responsive design */\n        @media (max-width: 1200px) {\n            .tournament-result-container .tournament-node { border-radius: 12px; }\n            .tournament-result-container .team-section { font-size: 10px; padding: 0 12px; }\n            .tournament-result-container .champion-title { font-size: 13px; }\n            .tournament-result-container .champion-team { font-size: 16px; }\n            .tournament-result-container .champion-badge { width: 50px; height: 50px; }\n            .tournament-result-container .champion-trophy { font-size: 24px; }\n        }\n\n        @media (max-width: 768px) {\n            .tournament-result-container .team-section { font-size: 9px; padding: 0 10px; }\n            .tournament-result-container .team-section .team-score.score-right { font-size: 14px; right: 10px; }\n            .tournament-result-container .champion-title { font-size: 12px; }\n            .tournament-result-container .champion-team { font-size: 15px; }\n            .tournament-result-container .champion-badge { width: 45px; height: 45px; }\n            .tournament-result-container .champion-trophy { font-size: 22px; }\n        }\n\n";
// Multi Segment Connector Bend angles
var angleTiltAmountForRound16ToQuarter = 60;
var angleTiltAmountForQuarterToSemi = 130;
// Node Size configuration
var championNodeSize = { w: 280, h: 200 };
var tournamentNodeSize = { w: 180, h: 100 };
// X-offset positions for tournament nodes
var offsetXIncreaseAmount = 280;
var leftRound16NodesOffsetX = offsetXIncreaseAmount;
var leftQuarterFinalNodesOffsetX = leftRound16NodesOffsetX + offsetXIncreaseAmount;
var leftSemiFinalNodesOffsetX = leftQuarterFinalNodesOffsetX + offsetXIncreaseAmount;
var finalNodeOffsetX = leftSemiFinalNodesOffsetX + offsetXIncreaseAmount;
var rightSemiFinalNodesOffsetX = finalNodeOffsetX + offsetXIncreaseAmount;
var rightQuarterFinalNodesOffsetX = rightSemiFinalNodesOffsetX + offsetXIncreaseAmount;
var rightRound16NodesOffsetX = rightQuarterFinalNodesOffsetX + offsetXIncreaseAmount;
// Y-offset positions for tournament nodes
var offsetYIncreaseAmount = 190;
var round16TopOffsetY = offsetYIncreaseAmount;
var round16UpperMiddleOffsetY = round16TopOffsetY + offsetYIncreaseAmount;
var round16LowerMiddleOffsetY = round16UpperMiddleOffsetY + offsetYIncreaseAmount;
var round16BottomOffsetY = round16LowerMiddleOffsetY + offsetYIncreaseAmount;
var quarterFinalTopOffsetY = (round16TopOffsetY + round16UpperMiddleOffsetY) / 2;
var quarterFinalBottomOffsetY = (round16LowerMiddleOffsetY + round16BottomOffsetY) / 2;
var semiFinalOffsetY = (quarterFinalTopOffsetY + quarterFinalBottomOffsetY) / 2;
var finalNodeOffsetY = semiFinalOffsetY;
var championNodeOffsetY = finalNodeOffsetY - 350;
// Define all tournament nodes with positions and properties
var nodes = [
    // Champion node (top center)
    {
        id: 'champion',
        offsetX: finalNodeOffsetX,
        offsetY: championNodeOffsetY,
        width: championNodeSize.w,
        height: championNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('champion')) },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    // Final node (center)
    {
        id: 'final',
        offsetX: finalNodeOffsetX,
        offsetY: finalNodeOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('final')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('final')), position: 'TopCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    // Semifinal nodes
    {
        id: 'semi1',
        offsetX: leftSemiFinalNodesOffsetX,
        offsetY: semiFinalOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('semi1')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('semi1')), position: 'TopCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    {
        id: 'semi2',
        offsetX: rightSemiFinalNodesOffsetX,
        offsetY: semiFinalOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('semi2')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('semi2')), position: 'TopCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    // Quarterfinal nodes (left side)
    {
        id: 'quarter1',
        offsetX: leftQuarterFinalNodesOffsetX,
        offsetY: quarterFinalTopOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('quarter1')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('quarter1')), position: 'RightCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    {
        id: 'quarter2',
        offsetX: leftQuarterFinalNodesOffsetX,
        offsetY: quarterFinalBottomOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('quarter2')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('quarter2')), position: 'RightCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    // Quarterfinal nodes (right side)
    {
        id: 'quarter3',
        offsetX: rightQuarterFinalNodesOffsetX,
        offsetY: quarterFinalTopOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('quarter3')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('quarter3')), position: 'LeftCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    {
        id: 'quarter4',
        offsetX: rightQuarterFinalNodesOffsetX,
        offsetY: quarterFinalBottomOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('quarter4')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('quarter4')), position: 'LeftCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    // Round of 16 nodes (left side)
    {
        id: 'round16_1',
        offsetX: leftRound16NodesOffsetX,
        offsetY: round16TopOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('round16_1')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('round16_1')), position: 'RightCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    {
        id: 'round16_2',
        offsetX: leftRound16NodesOffsetX,
        offsetY: round16UpperMiddleOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('round16_2')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('round16_2')), position: 'RightCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    {
        id: 'round16_3',
        offsetX: leftRound16NodesOffsetX,
        offsetY: round16LowerMiddleOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('round16_3')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('round16_3')), position: 'RightCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    {
        id: 'round16_4',
        offsetX: leftRound16NodesOffsetX,
        offsetY: round16BottomOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('round16_4')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('round16_4')), position: 'RightCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    // Round of 16 nodes (right side)
    {
        id: 'round16_5',
        offsetX: rightRound16NodesOffsetX,
        offsetY: round16TopOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('round16_5')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('round16_5')), position: 'LeftCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    {
        id: 'round16_6',
        offsetX: rightRound16NodesOffsetX,
        offsetY: round16UpperMiddleOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('round16_6')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('round16_6')), position: 'LeftCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    {
        id: 'round16_7',
        offsetX: rightRound16NodesOffsetX,
        offsetY: round16LowerMiddleOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('round16_7')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('round16_7')), position: 'LeftCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    },
    {
        id: 'round16_8',
        offsetX: rightRound16NodesOffsetX,
        offsetY: round16BottomOffsetY,
        width: tournamentNodeSize.w,
        height: tournamentNodeSize.h,
        shape: { type: 'HTML', content: getNodeTemplate(findData('round16_8')) },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip,
        tooltip: { content: createTooltipContent(findData('round16_8')), position: 'LeftCenter', relativeMode: 'Object' },
        style: { fill: 'transparent', strokeColor: 'transparent' }
    }
];
// Define all connectors linking tournament progression
var connectors = [
    // Champion connection
    {
        id: 'champ1',
        sourceID: 'final',
        targetID: 'champion',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    // Final connections
    {
        id: 'final1',
        sourceID: 'semi1',
        targetID: 'final',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'final2',
        sourceID: 'semi2',
        targetID: 'final',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    // Semifinal connections
    {
        id: 'semi1_1',
        segments: [{ point: { x: leftSemiFinalNodesOffsetX - angleTiltAmountForQuarterToSemi, y: quarterFinalTopOffsetY } }],
        sourceID: 'quarter1',
        targetID: 'semi1',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'semi1_2',
        segments: [{ point: { x: leftSemiFinalNodesOffsetX - angleTiltAmountForQuarterToSemi, y: quarterFinalBottomOffsetY } }],
        sourceID: 'quarter2',
        targetID: 'semi1',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'semi2_1',
        segments: [{ point: { x: rightSemiFinalNodesOffsetX + angleTiltAmountForQuarterToSemi, y: quarterFinalTopOffsetY } }],
        sourceID: 'quarter3',
        targetID: 'semi2',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'semi2_2',
        segments: [{ point: { x: rightSemiFinalNodesOffsetX + angleTiltAmountForQuarterToSemi, y: quarterFinalBottomOffsetY } }],
        sourceID: 'quarter4',
        targetID: 'semi2',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    // Quarterfinal connections
    {
        id: 'quarter1_1',
        segments: [{ point: { x: leftQuarterFinalNodesOffsetX - angleTiltAmountForRound16ToQuarter, y: round16TopOffsetY } }],
        sourceID: 'round16_1',
        targetID: 'quarter1',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'quarter1_2',
        segments: [{ point: { x: leftQuarterFinalNodesOffsetX - angleTiltAmountForRound16ToQuarter, y: round16UpperMiddleOffsetY } }],
        sourceID: 'round16_2',
        targetID: 'quarter1',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'quarter2_1',
        segments: [{ point: { x: leftQuarterFinalNodesOffsetX - angleTiltAmountForRound16ToQuarter, y: round16LowerMiddleOffsetY } }],
        sourceID: 'round16_3',
        targetID: 'quarter2',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'quarter2_2',
        segments: [{ point: { x: leftQuarterFinalNodesOffsetX - angleTiltAmountForRound16ToQuarter, y: round16BottomOffsetY } }],
        sourceID: 'round16_4',
        targetID: 'quarter2',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'quarter3_1',
        segments: [{ point: { x: rightQuarterFinalNodesOffsetX + angleTiltAmountForRound16ToQuarter, y: round16TopOffsetY } }],
        sourceID: 'round16_5',
        targetID: 'quarter3',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'quarter3_2',
        segments: [{ point: { x: rightQuarterFinalNodesOffsetX + angleTiltAmountForRound16ToQuarter, y: round16UpperMiddleOffsetY } }],
        sourceID: 'round16_6',
        targetID: 'quarter3',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'quarter4_1',
        segments: [{ point: { x: rightQuarterFinalNodesOffsetX + angleTiltAmountForRound16ToQuarter, y: round16LowerMiddleOffsetY } }],
        sourceID: 'round16_7',
        targetID: 'quarter4',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    },
    {
        id: 'quarter4_2',
        segments: [{ point: { x: rightQuarterFinalNodesOffsetX + angleTiltAmountForRound16ToQuarter, y: round16BottomOffsetY } }],
        sourceID: 'round16_8',
        targetID: 'quarter4',
        style: { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2 },
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' }
    }
];
var TournamentBracket = /** @class */ (function (_super) {
    __extends(TournamentBracket, _super);
    function TournamentBracket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLoading = true;
        return _this;
    }
    TournamentBracket.prototype.componentDidMount = function () {
        var _this = this;
        // Hide loading after delay like JS version
        setTimeout(function () {
            _this.isLoading = false;
            _this.forceUpdate(); // Re-render to hide loading
            if (diagramInstance) {
                diagramInstance.fitToPage({
                    canZoomIn: true,
                    margin: { left: 0, right: 20, top: 0, bottom: 90 }
                });
            }
        }, 700);
    };
    TournamentBracket.prototype.renderComplete = function () {
        if (diagramInstance) {
            diagramInstance.fitToPage({
                canZoomIn: true,
                margin: { left: 0, right: 20, top: 0, bottom: 90 }
            });
        }
    };
    TournamentBracket.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section tournament-result-container" },
                React.createElement("style", null, TOURNAMENT_CSS),
                React.createElement("div", { className: "sample-section" }, this.isLoading
                    ? React.createElement("div", { className: "loading" },
                        React.createElement("span", null, "Loading Tournament Results..."))
                    : (React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "footballResultDiagram", ref: function (diagram) { return (diagramInstance = diagram); }, width: "100%", height: "100%", nodes: nodes, connectors: connectors, getConnectorDefaults: function (connector) {
                            connector.type = 'Straight';
                            connector.sourcePadding = 10;
                            connector.targetPadding = 10;
                            return connector;
                        }, snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, scrollSettings: { canAutoScroll: false, scrollLimit: "Infinity" }, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan, load: function () {
                            setTimeout(function () {
                                if (diagramInstance) {
                                    diagramInstance.fitToPage({
                                        canZoomIn: true,
                                        margin: { left: 0, right: 20, top: 0, bottom: 90 }
                                    });
                                }
                            }, 0);
                        }, created: function () {
                            diagramInstance.fitToPage({
                                canZoomIn: true,
                                margin: { left: 0, right: 20, top: 0, bottom: 90 }
                            });
                        } })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample interactively visualizes a UEFA Champions League tournament bracket using the ",
                    React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                    ", showcasing team progression through match results, winning teams, flip-card animations, and informative tooltip.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This visually engaging UEFA Champions League bracket uses custom HTML nodes to display match details, including teams and scores. Flip-card animations reveal match results, clearly highlighting the winning teams. Animated connectors dynamically illustrate team progression, while interactive tooltip provide comprehensive match statistics. The ultimate champion is distinctly marked with a custom node and dynamic animations."),
                React.createElement("br", null))));
    };
    return TournamentBracket;
}(sample_base_1.SampleBase));
exports.TournamentBracket = TournamentBracket;
