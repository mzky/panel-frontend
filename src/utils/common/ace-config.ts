import ace from 'ace-builds'

import modeJsonUrl from 'ace-builds/src-noconflict/mode-json?url'
ace.config.setModuleUrl('ace/mode/json', modeJsonUrl)

import modePhpUrl from 'ace-builds/src-noconflict/mode-php?url'
ace.config.setModuleUrl('ace/mode/php', modePhpUrl)

import modeJavascriptUrl from 'ace-builds/src-noconflict/mode-javascript?url'
ace.config.setModuleUrl('ace/mode/javascript', modeJavascriptUrl)

import modeHtmlUrl from 'ace-builds/src-noconflict/mode-html?url'
ace.config.setModuleUrl('ace/mode/html', modeHtmlUrl)

import modeNginxUrl from 'ace-builds/src-noconflict/mode-nginx?url'
ace.config.setModuleUrl('ace/mode/nginx', modeNginxUrl)

import modeYamlUrl from 'ace-builds/src-noconflict/mode-yaml?url'
ace.config.setModuleUrl('ace/mode/yaml', modeYamlUrl)

import modeShUrl from 'ace-builds/src-noconflict/mode-sh?url'
ace.config.setModuleUrl('ace/mode/sh', modeShUrl)

import themeMonokaiUrl from 'ace-builds/src-noconflict/theme-monokai?url'
ace.config.setModuleUrl('ace/theme/monokai', themeMonokaiUrl)

import workerBaseUrl from 'ace-builds/src-noconflict/worker-base?url'
ace.config.setModuleUrl('ace/mode/base', workerBaseUrl)

import workerJsonUrl from 'ace-builds/src-noconflict/worker-json?url'
ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl)

import workerJavascriptUrl from 'ace-builds/src-noconflict/worker-javascript?url'
ace.config.setModuleUrl('ace/mode/javascript_worker', workerJavascriptUrl)

import workerHtmlUrl from 'ace-builds/src-noconflict/worker-html?url'
ace.config.setModuleUrl('ace/mode/html_worker', workerHtmlUrl)

import workerYamlUrl from 'ace-builds/src-noconflict/worker-yaml?url'
ace.config.setModuleUrl('ace/mode/yaml_worker', workerYamlUrl)

import workerPhpUrl from 'ace-builds/src-noconflict/worker-php?url'
ace.config.setModuleUrl('ace/mode/php_worker', workerPhpUrl)

import snippetsHtmlUrl from 'ace-builds/src-noconflict/snippets/html?url'
ace.config.setModuleUrl('ace/snippets/html', snippetsHtmlUrl)

import snippetsJsUrl from 'ace-builds/src-noconflict/snippets/javascript?url'
ace.config.setModuleUrl('ace/snippets/javascript', snippetsJsUrl)

import snippetsYamlUrl from 'ace-builds/src-noconflict/snippets/yaml?url'
ace.config.setModuleUrl('ace/snippets/javascript', snippetsYamlUrl)

import snippetsJsonUrl from 'ace-builds/src-noconflict/snippets/json?url'
ace.config.setModuleUrl('ace/snippets/json', snippetsJsonUrl)

import snippetsPhpUrl from 'ace-builds/src-noconflict/snippets/php?url'
ace.config.setModuleUrl('ace/snippets/php', snippetsPhpUrl)

import snippetsNginxUrl from 'ace-builds/src-noconflict/snippets/nginx?url'
ace.config.setModuleUrl('ace/snippets/nginx', snippetsNginxUrl)

import snippetsShUrl from 'ace-builds/src-noconflict/snippets/sh?url'
ace.config.setModuleUrl('ace/snippets/sh', snippetsShUrl)

import 'ace-builds/src-noconflict/ext-language_tools'
ace.require('ace/ext/language_tools')
