module.exports = {
		"baseUrl": "/Users/larryhe/workspace/vault.git/WzlUI/src/main/webapp/",
		"paths": {
			/***** START: common base packages; these modules will be packaged in vault.common.base.js and will be excluded from all other production packages *****/
			/***** IMPORTANT: we want to sync and control the size of the common.base production package so do not add anything additional packages here without consulting with Tudo Nguyen/Chris Rink *****/
			//third party library developer should not touch them
			"cssua": "components/lib/cssuseragent/cssua",
			"jqueryui": "components/lib/jquery/dist/jquery-ui",
			"jquerymigrate": "components/lib/jquery/dist/jquery-migrate-1.2.1",
			"json": "components/lib/json/json2",
			"signals": "components/lib/signals/signals",
			"backbone": "components/lib/backbone/backbone",
			"underscore": "components/lib/underscore/underscore",
			"backbone.paginator": "components/lib/backbone.paginator/lib/backbone.paginator",
			"hbs" : "components/lib/require-handlebars-plugin/hbs",
			"jquery": "components/lib/jquery/dist/jquery",
			"bootstrap.transition": "components/lib/bootstrap/js/transition",
			"bootstrap.collapse": "components/lib/bootstrap/js/collapse",
			"bootstrap.dropdown": "components/lib/bootstrap/js/dropdown",
            "snap.svg": "components/lib/Snap.svg/dist/snap.svg",
			"bootstrap.affix": "JMVC/veeva_vault/resources/scripts/bootstrap-affix",
			"bootstrap.scrollspy": "JMVC/veeva_vault/resources/scripts/bootstrap-scrollspy",

			"bbq": "JMVC/veeva_vault/resources/scripts/jquery.ba-bbq",
			"blockui": "JMVC/veeva_vault/resources/scripts/jquery.blockUI",
			"fgmenu": "JMVC/veeva_vault/resources/scripts/fg.menu",
			"jqueryvalidate": "JMVC/veeva_vault/resources/scripts/jquery.validate",
			"jquerytooltip": "JMVC/veeva_vault/resources/scripts/jquery.tooltip",
			"jqueryuiautocomplete": "JMVC/veeva_vault/resources/scripts/jquery.ui.autocomplete",
			"jqueryautogrowinput": "JMVC/veeva_vault/resources/scripts/jquery.autogrowinput",
			"jquerycookie": "JMVC/veeva_vault/resources/scripts/jquery.cookie",
			"jquerysortelement": "JMVC/veeva_vault/resources/scripts/jquery.sortElements",
			"jquerywatermark": "JMVC/veeva_vault/resources/scripts/jquery.watermark",
			"jqueryidletimeout": "JMVC/veeva_vault/resources/scripts/jquery.idletimeout",
			"jqueryidletimer": "JMVC/veeva_vault/resources/scripts/jquery.idletimer",
			"jqueryautosize": "JMVC/veeva_vault/resources/scripts/jquery.autosize",
			"jqueryuitouchpunch": "JMVC/veeva_vault/resources/scripts/jquery.ui.touch-punch",
			"jquerydrag": "JMVC/veeva_vault/resources/scripts/jquery.event.drag-2.2",
			"jquerydrop": "JMVC/veeva_vault/resources/scripts/jquery.event.drop-2.2",
			"jqueryclickoutside": "JMVC/veeva_vault/resources/scripts/jquery.ba-outside-events",
			"bubblepopup": "JMVC/veeva_vault/resources/scripts/veeva.bubblePopup",
			"nibbler": "JMVC/veeva_vault/resources/scripts/Nibbler",
            "base64": "JMVC/veeva_vault/resources/scripts/base64",
			"highcharts": "JMVC/veeva_vault/resources/scripts/highcharts/highcharts",
			"highchartstheme":'JMVC/veeva_vault/resources/scripts/highcharts/themes/veeva-theme',       // Veeva Theme
            "es5shim":"JMVC/veeva_vault/resources/scripts/es5-shim-4.0.6",
            "jsplumb": "JMVC/veeva_vault/resources/scripts/jquery.jsPlumb-1.6.2",
            "highchartsmore":'JMVC/veeva_vault/resources/scripts/highcharts/highcharts-more',    // charting library add-on
            "highchartsexporting":'JMVC/veeva_vault/resources/scripts/highcharts/exporting',  		// export charts
            "jquerytextinputs": "JMVC/veeva_vault/resources/scripts/jquery.textinputs",
            "slickeditor": "JMVC/vault_binders/resources/scripts/veeva.slick.editors",
            "slickdataview": "JMVC/veeva_vault/resources/scripts/slick.dataview",
            "slickcore": "JMVC/veeva_vault/resources/scripts/slick.core",
            "slickgrid": "JMVC/veeva_vault/resources/scripts/slick.grid",

            "jquerytree" : "JMVC/veeva_vault/resources/scripts/jquery.jstree",
            "veevajstree": "JMVC/veeva_vault/resources/scripts/veeva.jstree",
            "moreless": "JMVC/veeva_vault/resources/scripts/veeva.moreLess",
            "vvparentsortpage": "JMVC/veeva_vault/resources/scripts/veeva.veevaParentSortPage",
            "jquerydatatable" : "JMVC/veeva_vault/resources/scripts/jquery.dataTables",
            "hotkeys" : 'JMVC/veeva_vault/resources/scripts/jquery.hotkeys',
            "jqueryform":"JMVC/veeva_vault/resources/scripts/jquery.form",
            "lazyscrollloader": "JMVC/veeva_vault/resources/scripts/jquery.lazyscrollloading",
            "moment": "JMVC/veeva_vault/resources/scripts/moment",
            "momentTZ": "JMVC/veeva_vault/resources/scripts/moment-timezone-with-data",

            "combobox": "JMVC/veeva_vault/resources/scripts/veeva.combobox",
            "truncatetext": "JMVC/veeva_vault/resources/scripts/veeva.truncateText",
            "rolodex": "JMVC/veeva_vault/resources/scripts/veeva.rolodex",
            "veevachunk": "JMVC/veeva_vault/resources/scripts/veeva.chunk",
            "veevasearchbar": "JMVC/veeva_vault/resources/scripts/veeva.searchbar",
            "itemview": "JMVC/veeva_vault/resources/scripts/veeva.ui.itemview",
            "wizarddialog": "JMVC/veeva_vault/resources/scripts/veeva/wizardDialog",
            "wizardpage": "JMVC/veeva_vault/resources/scripts/veeva/wizardPage",
            "vvpagingwidget" : "JMVC/veeva_vault/resources/scripts/veeva.page",
            "docviewexpanderwidget" : "JMVC/veeva_vault/resources/scripts/veeva/docViewExpander",
            "singlefileupload": "JMVC/veeva_vault/resources/scripts/veeva.singleFileUpload",
            "searchfilter": "JMVC/veeva_vault/resources/scripts/veeva.ui.searchfilter",
            "veevaselect": "JMVC/veeva_vault/resources/scripts/veeva.select",
            "veevaaccordian": "JMVC/veeva_vault/resources/scripts/veeva.accordian",
            "veevauiautocomplete": "JMVC/veeva_vault/resources/scripts/veeva.ui.autocomplete",
            "vvmultifileselect": "JMVC/veeva_vault/resources/scripts/veeva.multifileselect",
            "veevamenu": "JMVC/veeva_vault/resources/scripts/veeva/menu",
            "colreorderresize": "JMVC/veeva_vault/resources/scripts/veeva.ColReorderWithResize",
            "veevainlineedit": "JMVC/veeva_vault/resources/scripts/veeva.inlineEdit",
            "gridtable": "JMVC/vault_binders/resources/scripts/veeva.gridtable",
            "veevatokenator": "JMVC/vault_admin/resources/scripts/veeva.ui.tokenator",
            // JMVC Libraries
            "steal": "JMVC/veeva_vault/resources/scripts/veeva/stealShim",
            "jqueryobject": "JMVC/jquery/lang/object/object",
            "jquerystring": "JMVC/jquery/lang/string/string",
            "jqueryclass": "JMVC/jquery/class/class",
            "jqueryeventdestroyed": "JMVC/jquery/event/destroyed/destroyed",
            "jquerycontroller": "JMVC/jquery/controller/controller",
            "jquerymodel": "JMVC/jquery/model/model",

            // all the files below is our own and will be migrated to ES6 module format
            "jquerydomfixture": "JMVC/jquery/dom/fixture/fixture", // WARNING: never include this in a production package as it will mock test data for the model endpoints
            "jqueryuidatepicker": "JMVC/veeva_vault/resources/scripts/jquery.ui.datepicker",
            "jqueryuidatetimepicker": "JMVC/veeva_vault/resources/scripts/jquery-ui-timepicker-addon",
            "veevafilterbuilder": "JMVC/veeva_vault/resources/scripts/veeva.ui.filterbuilder",
            "colorpicker": "JMVC/veeva_vault/resources/scripts/colorpicker",
            "momentJDF": "JMVC/veeva_vault/resources/scripts/moment-jdateformatparser",
            "vaultDateFormatter": "JMVC/vault/dateFormatter",

			// Veeva widgets
			"veevatooltip": "JMVC/veeva_vault/resources/scripts/veeva.tooltip",
			"veevamultiitemautocomplete": "JMVC/veeva_vault/resources/scripts/veeva.ui.multiitemautocomplete",
			"vaultUrlReader": "JMVC/vault/urlReader",
			"vaultListTraversal": "JMVC/vault/listTraversal",
			"documentNameHover":"JMVC/vault/documentName",
			"submissionLifecycle":"JMVC/vault/submissionLifecycle",
			"documentLeafHover":"JMVC/vault/documentLeaf",
			"favoritesController": "JMVC/vault/favoritesController",
            "persistentNotice": "JMVC/vault/persistentNotice",
            "notificationFlyout": "JMVC/vault/notificationFlyout",

			"vvcontrollerbase": "JMVC/veeva_vault/controllers/base_controller",
			"vvcontrollerbasenav": "JMVC/veeva_vault/controllers/base_nav_controller",
			"vvcontrollermainnav": "JMVC/veeva_vault/controllers/main_nav_controller",
			"vvcontrollerutil": "JMVC/veeva_vault/controllers/util_controller",
			"vvcontrollerpersistentstatus": "JMVC/veeva_vault/controllers/persistent_status_controller",
			"veevajumplink": "JMVC/veeva_vault/resources/scripts/veeva.jumplink",

			/***** END: common base packages *****/

			/***** START: common admin packages *****/

			/***** START: common admin packages *****/



			/** Vault Created Widgets **/



			"multiacsearch": "JMVC/veeva_vault/resources/scripts/veeva.ui.multiacsearch",
			"docTypeSuggestionSearch": "JMVC/veeva_vault/resources/scripts/veeva/docTypeSuggestionSearch",
			"searchbreadcrumbs": "JMVC/veeva_vault/resources/scripts/veeva.ui.searchbreadcrumbs",
			"nestedpicklist": "JMVC/veeva_vault/resources/scripts/veeva.ui.nestedPicklist",
			"categorizedpicklist": "JMVC/veeva_vault/resources/scripts/veeva.ui.categorizedPicklist",
            "userassignedsitesdialog": "JMVC/veeva_vault/resources/scripts/veeva/userAssignedSitesDialog",
            "addremovejoinsdialog": "JMVC/veeva_vault/resources/scripts/veeva/addRemoveJoinRecordsDialog",
			"listtooltip": "JMVC/veeva_vault/resources/scripts/veeva/listTooltip",
			"resizabletoolbar" : "JMVC/veeva_vault/resources/scripts/veeva/resizable-toolbar",

			"daterangewidget" : "JMVC/veeva_vault/resources/scripts/veeva.ui.daterange",
			"parentlookup": "JMVC/veeva_vault/resources/scripts/veeva.ui.parentlookup",
			"mostRecentlyUsedAutoComplete": "JMVC/veeva_vault/resources/scripts/veeva.ui.mostRecentlyUsedAutoComplete",
			"proplookup": "JMVC/veeva_vault/resources/scripts/veeva.ui.proplookup",
			"voflookup": "JMVC/veeva_vault/resources/scripts/veeva.ui.voflookup",
            "singleitemuser": "JMVC/veeva_vault/resources/scripts/veeva.ui.singleitemuser",
			"veevacomment": "JMVC/veeva_vault/resources/scripts/veeva.comment",
			"veevauifacetbase": "JMVC/veeva_vault/resources/scripts/veeva.ui.facetBase",
			"veevauifacet": "JMVC/veeva_vault/resources/scripts/veeva.ui.facet",
			"facetcriteria":  "JMVC/veeva_vault/utilities/facetCriteriaTransformer",
			"formulaeditor": "JMVC/vault_admin/resources/scripts/veeva.ui.formulaeditor",
			"formulabuilder": "JMVC/vault_admin/resources/scripts/veeva.ui.formulaBuilder",
			'nestedmenu': 'JMVC/veeva_vault/resources/scripts/veeva/nestedMenu',
			"spatialAwareness": "JMVC/veeva_vault/resources/scripts/veeva/spatialAwareness",
			'voftabbar': 'JMVC/veeva_vault/resources/scripts/veeva/vofTabBar',
			'vaulttabbar': 'JMVC/veeva_vault/resources/scripts/veeva/vaultTabBar',
			'dragdropupload': 'JMVC/veeva_vault/resources/scripts/veeva/dragDropUpload',
			"inheritedmultiitemautocomplete": "JMVC/veeva_vault/resources/scripts/veeva.ui.inheritedmultiitemautocomplete",
			"vvbasedialog": "JMVC/veeva_vault/resources/scripts/veeva/baseDialog",
			"reordercol": "JMVC/veeva_vault/resources/scripts/veeva/reorderCol",
			"vvmergeanchordialog": "JMVC/veeva_vault/resources/scripts/veeva/mergeAnchorDialog",
			"vvscrolltoedge": "JMVC/veeva_vault/resources/scripts/veeva.scrollToEdge",
			"vaultwindowmanager": "annotate/veeva/Vault/Services/WindowManager",
			"veevadocumentlookup": "JMVC/veeva_vault/resources/scripts/veeva.documentLookup",

			"veevauiadvancedfilter":"JMVC/veeva_vault/resources/scripts/veeva.ui.advancedFilter",
			"vvdropdowngroupformater": "JMVC/veeva_vault/resources/scripts/veeva/dropdownGroupFormater",
			"docTypePicker":"JMVC/veeva_vault/resources/scripts/veeva.ui.docTypePicker",
			"fieldSelector": "components/common/widgets/fieldSelector/scripts/veeva.fieldSelector",
            "selectExistingPicklist":"JMVC/veeva_vault/resources/scripts/veeva.ui.selectExistingPicklist",
            
            // Rules Widget
			"ruleswidget" : "JMVC/veeva_vault/resources/scripts/RulesWidget",
            
            
            "sectionsManager" : "components/common/widgets/sectionsManager/scripts/veeva.ui.sectionsManager",
            "subWidgetSwitcher" : "components/common/widgets/subWidgetSwitcher/scripts/veeva.ui.subWidgetSwitcher",
            "workflowStartStepPromptInstruction" : "JMVC/veeva_vault/resources/scripts/veeva/workflow/workflowStartStepPromptInstruction",
            "workflowStartStepPromptDate" : "JMVC/veeva_vault/resources/scripts/veeva/workflow/workflowStartStepPromptDate",
            "workflowStartStepPromptParticipants" : "JMVC/veeva_vault/resources/scripts/veeva/workflow/workflowStartStepPromptParticipants",
            
			"entryCriteriaRuleActionWidget": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/EntryCriteriaRuleActionWidget",
			"esignaturePagesRuleActionWidget": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/EsignaturePagesRuleActionWidget",
			"userActionRuleActionWidget": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/UserActionsRuleActionWidget",
			"entryActionsRuleActionWidget": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/EntryActionsRuleActionWidget",
			"objectEntryActionsRuleActionWidget": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/ObjectEntryActionsRuleActionWidget",
            "objectUserActionsRuleActionWidget": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/ObjectUserActionsRuleActionWidget",
			"baseRuleActionWidget": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/BaseRuleActionWidget",
			"rulesWidgetHelper": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/RulesWidgetHelper",
            "ruleswidgetserializers": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/serialize/rulesWidgetSerializers",
            "objectlifecyclebehaviorserializer": "JMVC/veeva_vault/resources/scripts/veeva/rulesWidget/serialize/ObjectLifecycleBehaviorSerializer",

			// Object Workflow-related widgets
			"picklistBuilder": "components/common/widgets/picklistBuilder/scripts/picklistBuilder",
			"verdictBuilder": "components/common/widgets/verdictBuilder/scripts/verdictBuilder",
			"verdictSectionBuilder": "components/common/widgets/verdictSectionBuilder/scripts/verdictSectionBuilder",

			// vault_binders resources
			"gridtree": "JMVC/vault_binders/resources/scripts/veeva.gridtree",


			// veeva_vault controllers
			"vvcontrollerhome": "JMVC/veeva_vault/controllers/home_controller",
			"vvcontrollervofutil": "JMVC/veeva_vault/controllers/vof_util_controller",
			"vvcontrolleradvancedsearch": "JMVC/veeva_vault/controllers/advanced_search_controller",
			"vvcontrollerobjectsetup": "JMVC/veeva_vault/controllers/object_setup_controller",
			"vault.page.ObjectList": "JMVC/veeva_vault/controllers/vof/vault.page.ObjectList",
			"admin.page.ObjectList": "JMVC/vault_admin/controllers/objects/admin.page.ObjectList",
			"vvcontrollervoflookupdialog": "JMVC/veeva_vault/controllers/vof_lookup_dialog_controller",
			"vvcontrollergenerictabularlist": "JMVC/veeva_vault/controllers/generic_tabular_list_controller",
			"vvcontrollersuffixutil": "JMVC/veeva_vault/controllers/generic/suffix_util_controller",
			"vvcontrollerfieldrelations": "JMVC/vault_admin/controllers/generic/field_relations_controller",
			"vvcontrollerpopulatefieldrelations": "JMVC/vault_admin/controllers/generic/populate_field_relations_controller",
			"vvcontrollerslickgridlist": "JMVC/veeva_vault/controllers/generic/slickgrid_list_controller",
			"vvcontrollertopnav": "JMVC/veeva_vault/controllers/top_nav_controller",
			"vvcontrollerdocumentsharing": "JMVC/veeva_vault/controllers/document/document_sharing_controller",
			"vvcontrollerdocumentsharinglocal": "JMVC/veeva_vault/controllers/document/document_sharing_local_controller",
			"vvcontrollerdocumentsharingreclassify": "JMVC/veeva_vault/controllers/document/document_sharing_reclassify_controller",
			"vvcontrollerdocumentsharingdefaulting": "JMVC/veeva_vault/controllers/document/document_sharing_defaulting_controller",
			"vvcontrollerdocumentsharingdefaultingmultiple": "JMVC/veeva_vault/controllers/document/document_sharing_defaulting_multiple_controller",
			"vvcontrolleradddocumentsharing": "JMVC/veeva_vault/controllers/document/add_document_sharing_controller",
			"vvcontrollerdocinfo": "JMVC/veeva_vault/controllers/doc_info_controller",
			"vvcontrollerdocinfo3": "JMVC/veeva_vault/controllers/doc_info3_controller",
			"vvcontrollerdocinfoclassify": "JMVC/veeva_vault/controllers/doc_info_classify_controller",
			"vvcontrollerdocinfocopy": "JMVC/veeva_vault/controllers/doc_info_copy_controller",
			"vvcontrollerdocinfochangecontrol": "JMVC/veeva_vault/controllers/doc_info_change_control_controller",
			"vvcontrollerdocinfoform": "JMVC/veeva_vault/controllers/doc_info_form_controller",
			"vvcontrollerdocinfoviewform": "JMVC/veeva_vault/controllers/doc_info_view_form_controller",
			"vvcontrolleruploadpropertyform": "JMVC/veeva_vault/controllers/upload_property_form_controller",
			"vvcontrollerdocuploadform": "JMVC/veeva_vault/controllers/doc_upload_form_controller",
			"vvcontrollerreportwalk": "JMVC/veeva_vault/controllers/report_walk_controller",
			"vvcontrollerdocinfoworkflow": "JMVC/veeva_vault/controllers/doc_info_workflow_controller",
			"vvcontrollerdocvideo": "JMVC/veeva_vault/controllers/doc_video_controller",
			"vvcontrollerrenditions": "JMVC/veeva_vault/controllers/renditions_controller",
			"vvcontrollermoreactions": "JMVC/veeva_vault/controllers/more_actions_controller",
			"vvcontrolleruserprofile": "JMVC/veeva_vault/controllers/user_profile_controller",
			"vvcontrolleruserprofilebase": "JMVC/veeva_vault/controllers/user_profile_base_controller",
			"vvcontrollerveevadocument": "JMVC/veeva_vault/controllers/veeva_document_controller",
			"vvcontrollerreportinghome": "JMVC/veeva_vault/controllers/reporting/home_controller",
			"vvcontrollerreportingcreator": "JMVC/veeva_vault/controllers/reporting/creator_controller",
			"vvcontrollerreportingbuilder": "JMVC/veeva_vault/controllers/reporting/builder_controller",
			"vvcontrollerreportingviewer": "JMVC/veeva_vault/controllers/reporting/viewer_controller",
			"vvcontrollerreportingutil": "JMVC/veeva_vault/controllers/reporting/reporting_util_controller",
			"vvcontrollerdashboardsbuilder": "JMVC/veeva_vault/controllers/dashboards/builder_controller",
			"vvcontrollerdashboardsviewer": "JMVC/veeva_vault/controllers/dashboards/viewer_controller",
			"vvcontrollerdashboardshome": "JMVC/veeva_vault/controllers/dashboards/home_controller",
			"vvcontrollervaultloaderload": "JMVC/veeva_vault/controllers/vaultLoader/loader_controller",
            "vvcontrollervaultloaderextract": "JMVC/veeva_vault/controllers/vaultLoader/extract_controller",
            "vvcontrollervaultloadernav": "JMVC/veeva_vault/controllers/vaultLoader/loader_nav_controller",
			"vvcontrollerworkflow": "JMVC/veeva_vault/controllers/workflow_controller",
			"vvcontrollerssdp": "JMVC/veeva_vault/controllers/ssdp_controller",
			"vvcontrollerdoccomments": "JMVC/veeva_vault/controllers/doc_comments_controller",
			"vvcontrollerrimsaviewer": "JMVC/veeva_vault/controllers/rimSaViewer/rim_sa_viewer_controller",

			"vvcontrolleraddcontentstep1": "JMVC/veeva_vault/controllers/add_content_controller",
			"vvcontrollermultifileaddcontent": "JMVC/veeva_vault/controllers/multifile_add_content_controller",
			"vvcontrollercrosslinkutil": "JMVC/veeva_vault/controllers/crosslink_util_controller",
			"vvcontrollermulticrosslinkaddcontent": "JMVC/veeva_vault/controllers/multicrosslink_add_content_controller",
			"vvcontrollersinglecrosslinkaddcontent": "JMVC/veeva_vault/controllers/singlecrosslink_add_content_controller",
			"vvcontrollersinglefileaddcontent": "JMVC/veeva_vault/controllers/singlefile_add_content_controller",
			"vvcontrollermultifileeditproperties": "JMVC/veeva_vault/controllers/multifile_edit_properties_controller",
            "vvcontrollersinglefileedit": "JMVC/veeva_vault/controllers/singlefile_edit_controller",
            "vvcontrollerautomatchedit": "JMVC/veeva_vault/controllers/automatch_edit_controller",
            "vvcontrollerautomatchview": "JMVC/veeva_vault/controllers/automatch_view_controller",
			"vvcontrollersinglefileclassify": "JMVC/veeva_vault/controllers/singlefile_classify_controller",
			"vvcontrollersinglefileuploadedit": "JMVC/veeva_vault/controllers/single_file_upload_edit_controller",
			"vvcontrollersinglefileuploadview": "JMVC/veeva_vault/controllers/single_file_upload_view_controller",
			"vvcontrollerdialogsGenericDocTypePickerDialog": "JMVC/veeva_vault/controllers/dialogs/generic_doc_type_picker_dialog_controller",
			"vvcontrollerdialogsclassifydialog": "JMVC/veeva_vault/controllers/dialogs/classify_dialog_controller",
			"vvcontrollerdialogsreclassifydialog": "JMVC/veeva_vault/controllers/dialogs/reclassify_dialog_controller",
			"vvcontrollerdialogslegacydoctypepickerdialog": "JMVC/veeva_vault/controllers/dialogs/legacy_doc_type_picker_dialog_controller",
			"vvcontrollersection": "JMVC/veeva_vault/controllers/section_controller",
			"vvcontrollerrelatedcrosslinks": "JMVC/veeva_vault/controllers/related_crosslinks_controller",
			"vvcontrollerattachments": "JMVC/veeva_vault/controllers/attachments_controller",
			"vvcontrollerattachmentshistory": "JMVC/veeva_vault/controllers/attachments_history_controller",
			"vvcontrollerrelateddocuments": "JMVC/veeva_vault/controllers/related_documents_controller",
			"vvcontrollerversionhistory": "JMVC/veeva_vault/controllers/version_history_controller",
			"vvcontrollerassets": "JMVC/veeva_vault/controllers/assets_controller",
			"vvcontrollerlibrary": "JMVC/veeva_vault/controllers/library_controller",
			"vvcontrollercheckinout": "JMVC/veeva_vault/controllers/checkinout_controller",
			"vvcontrollerbulkaction": "JMVC/veeva_vault/controllers/bulkAction/bulk_action_controller",
			"vvcontrollerbasestep": "JMVC/veeva_vault/controllers/bulkAction/base_step_controller",
			"vvcontrollerrefineselectionstep": "JMVC/veeva_vault/controllers/bulkAction/refine_selection_step_controller",
			"vvcontrollerchooseactionstep": "JMVC/veeva_vault/controllers/bulkAction/choose_action_step_controller",
			"vvcontrollereditfields": "JMVC/veeva_vault/controllers/bulkAction/edit_fields_controller",
			"vvcontrollerbulkeditfields": "JMVC/veeva_vault/controllers/bulkAction/bulk_edit_fields_controller",
            "vvcontrollerbulkdeletedocuments": "JMVC/veeva_vault/controllers/bulkAction/bulk_delete_documents_controller",
			"vvcontrollerbulkchangeownercoordinator": "JMVC/veeva_vault/controllers/bulkAction/bulk_change_owner_coordinator",
			"vvcontrollergeneratecompliancepackage": "JMVC/veeva_vault/controllers/bulkAction/generate_compliance_package_controller",
			"vvcontrollerupdateroles": "JMVC/veeva_vault/controllers/bulkAction/update_roles_controller",
			"vvcontrolleraddroles": "JMVC/veeva_vault/controllers/bulkAction/add_roles_controller",
			"vvcontrollerremoveroles": "JMVC/veeva_vault/controllers/bulkAction/remove_roles_controller",
			"vvcontrollerconfirmationstep": "JMVC/veeva_vault/controllers/bulkAction/confirmation_step_controller",
			"vvcontrollerchooseworkflowstep": "JMVC/veeva_vault/controllers/bulkAction/choose_workflow_step_controller",
			"vvcontrollerchoosestatechangestep": "JMVC/veeva_vault/controllers/bulkAction/choose_state_change_step_controller",
			"vvcontrollereditworkflowdetailsstep": "JMVC/veeva_vault/controllers/bulkAction/edit_workflow_details_step_controller",
			"vvcontrollerinbox": "JMVC/veeva_vault/controllers/inbox_upload_controller",
			"vvcontrollercrosslink": "JMVC/veeva_vault/controllers/inbox_cross_link_controller",
			"vvcontrollerdelegateaccess": "JMVC/veeva_vault/controllers/delegate_access_controller",
			"vvcontrollerhelp": "JMVC/veeva_vault/controllers/help_controller",
			"vvcontrollerbinderaddcontent": "JMVC/veeva_vault/controllers/binder_add_content_controller",
			"vvcontrollernouploadaddcontent": "JMVC/veeva_vault/controllers/no_upload_add_content_controller",
			"vvcontrollerautomatchplaceholder": "JMVC/veeva_vault/controllers/automatch_placeholder_controller",
			"vvcontrollertimelineview": "JMVC/veeva_vault/controllers/timeline_view_controller",
			"vvcontrollersearchdialog": "JMVC/veeva_vault/controllers/search_dialog_controller",
			"vvcontrollerclm": "JMVC/veeva_vault/controllers/clm_controller",
			"vvcontrollerwebtab": "JMVC/veeva_vault/controllers/web_tab_controller",
			"vvcontrollersavedviews": "JMVC/veeva_vault/controllers/saved_views_controller",
			"vvcontrollersendemail": "JMVC/veeva_vault/controllers/workflowActions/send_email_controller",
            "vvcontrollerupdateworkflowdates": "JMVC/veeva_vault/controllers/workflowActions/update_workflow_dates_controller",
            "vvcontrollertasklist": "JMVC/veeva_vault/controllers/task_list_controller",
			"vvcontrollercreatepresentation": "JMVC/veeva_vault/controllers/create_presentation_controller",

         /* Generic layout controllers */
			"vvcontrollerobjectrecord": "JMVC/vault_admin/controllers/objects/new_layout/object_record_controller",
			"vvcontrollerobjectdetailsection": "JMVC/vault_admin/controllers/objects/new_layout/object_detail_section_controller",
			"vvcontrollerobjecttablesection": "JMVC/vault_admin/controllers/objects/new_layout/object_table_section_controller",
			"vvcontrollerobjectdynamictablesection": "JMVC/vault_admin/controllers/objects/new_layout/object_dynamic_table_section_controller",
			"vvcontrollerobjectattachmentsection": "JMVC/vault_admin/controllers/objects/new_layout/object_attachment_section_controller",
			"vvcontrollersectionlayoutdelegate": "JMVC/veeva_vault/controllers/generic/new_layout/section_layout_delegate_controller",
			"vvcontrollertable": "JMVC/veeva_vault/controllers/generic/new_layout/table_controller",
			"vvcontrollervoflayout": "JMVC/veeva_vault/controllers/vof/vof_layout_controller",
            "vvcontrollerpagelayouts": "JMVC/veeva_vault/controllers/generic/pagelayouts/pagelayouts_controller",
			"vofwidgetsdetail": "JMVC/vofWidgets/detail",
			"vofwidgetsattachment": "JMVC/vofWidgets/attachment",
			"vofwidgetsrelation": "JMVC/vofWidgets/relation",
			"vofwidgetsrelateddocs": "JMVC/vofWidgets/relatedDocs",
            "vofwidgetsbinders": "JMVC/vofWidgets/binders",
			"vofruleswidget": "JMVC/vofWidgets/vofRulesWidget",
			"vofwftimelinewidget": "JMVC/vofWidgets/wfTimeline",
			"stepType": "JMVC/veeva_vault/resources/scripts/veeva/workflow/stepType/scripts/stepType",
			"vofTasks": "JMVC/vofWidgets/tasks",
			"objectWorkflowUserTaskNotificationAndReminders": "JMVC/veeva_vault/resources/scripts/veeva/workflow/userTaskNotificationAndReminders/scripts/objectWorkflowUserTaskNotificationAndReminders",
			"userTaskNotificationAndRemindersRow": "JMVC/veeva_vault/resources/scripts/veeva/workflow/userTaskNotificationAndRemindersRow/scripts/userTaskNotificationAndRemindersRow",
			"widgetList": "JMVC/veeva_vault/resources/scripts/veeva/workflow/widgetList/scripts/widgetList",
			"userTaskVerdict": "JMVC/veeva_vault/resources/scripts/veeva/workflow/userTaskVerdict/scripts/userTaskVerdict",

			/*
			 * Vof related controller (separate b/c now they're available in both
			 * admin *and* vault
			 */
			"vvcontrollervaultvofnav": "JMVC/veeva_vault/controllers/vault_vof_nav_controller",
			"vvcontrollervaultobjecttab": "JMVC/veeva_vault/controllers/vault_object_tab_controller",
			"vvcontrollerrecordsharingsettings":"JMVC/vault_admin/controllers/objects/record_sharing_settings_controller",

			// vault_admin resources

         "customTabsTree": "JMVC/vault_admin/resources/scripts/veeva.customTabsTree",

			// vault_admin controllers
			"vvcontrolleradminnav": "JMVC/vault_admin/controllers/admin_nav_controller",
			"vvcontrolleradminhome": "JMVC/vault_admin/controllers/home_controller",

			"vvcontrollersetupvofnav": "JMVC/vault_admin/controllers/setup_vof_nav_controller",
			"vvcontrollerbusadmin": "JMVC/vault_admin/controllers/bus_admin_controller",

			"vvcontrollergeneric": "JMVC/vault_admin/controllers/generic_controller",

			"vvcontrollerreporttypelist": "JMVC/vault_admin/controllers/reportTypes/report_type_list_controller",
			"vvcontrollerreporttypedetail": "JMVC/vault_admin/controllers/reportTypes/report_type_detail_controller",

			"vvcontrollerbusinessadminlayout": "JMVC/vault_admin/controllers/business_admin_layout_controller",
			"vvcontrolleradminrenditions": "JMVC/vault_admin/controllers/renditions_controller",

			"vvcontrollerworkflowflyout": "JMVC/veeva_vault/controllers/workflow_flyout_controller",
			"vvcontrollercreategroup": "JMVC/vault_admin/controllers/create_group_controller",

			"vvcontrollerworkflowtaskflyout":"JMVC/veeva_vault/controllers/workflow_task_flyout_controller",

			"vvcontrollersubmissionimport": "JMVC/veeva_vault/controllers/submission_import_controller",

			"vvcontrollersubmissionmetadatamatching": "JMVC/veeva_vault/controllers/submission_metadata_matching_controller",

			"vvcontrollersadocinfosection": "JMVC/veeva_vault/controllers/sa_docinfo_section_controller",

			"vvcontrollerdependentproperties": "JMVC/vault_admin/controllers/dependent_properties_controller",

			"vvcontrollersecurityprofiledetail": "JMVC/vault_admin/controllers/usersGroups/securityProfiles/security_profile_detail_controller",
			"vvcontrollersecurityprofilemembers": "JMVC/vault_admin/controllers/usersGroups/securityProfiles/security_profile_members_controller",
			"vvcontrollersecurityprofile": "JMVC/vault_admin/controllers/usersGroups/securityProfiles/security_profiles_controller",

			"vvcontrollerpermissionset": "JMVC/vault_admin/controllers/usersGroups/permissionSets/permission_sets_controller",
            "vvcontrollerpermissionsetdetail": "JMVC/vault_admin/controllers/usersGroups/permissionSets/permission_set_detail_controller",

			"vvcontrollergroups": "JMVC/vault_admin/controllers/usersGroups/groups_controller",
			"vvcontrollergroupsdetail": "JMVC/vault_admin/controllers/usersGroups/groups_detail_controller",
			"vvcontrollergroupsmembers": "JMVC/vault_admin/controllers/usersGroups/groups_members_controller",
			"vvcontrollergroupsuserswizard": "JMVC/vault_admin/controllers/usersGroups/groups_users_wizard_controller",
			"vvcontrollerusergroupmember": "JMVC/vault_admin/controllers/usersGroups/user_group_member_controller",
			"admin.page.UserList": "JMVC/vault_admin/controllers/usersGroups/admin.page.UserList",
			"vvcontrollerusersdetail": "JMVC/vault_admin/controllers/usersGroups/users_detail_controller",
			"vvcontrollerusersgroupnav": "JMVC/vault_admin/controllers/usersGroups/users_groups_controller",
			"vvcontrollerusersgroupslist": "JMVC/vault_admin/controllers/usersGroups/users_groups_list_controller",
			"vvcontrollerusersmembership": "JMVC/vault_admin/controllers/usersGroups/users_membership_controller",
			"vvcontrollerusersoverrides": "JMVC/vault_admin/controllers/usersGroups/users_overrides_controller",
			"vvcontrolleruserssites": "JMVC/vault_admin/controllers/usersGroups/users_sites_controller",
			"vvcontrollerusersvaults": "JMVC/vault_admin/controllers/usersGroups/users_vaults_controller",
			"vvcontrollerdomainuseradmin": "JMVC/vault_admin/controllers/usersGroups/domain_user_admin_controller",
			"vvcontrollerimportuserswizard": "JMVC/vault_admin/controllers/usersGroups/import_users_wizard_controller",
            "vvcontrolleraddselectedusers": "JMVC/vault_admin/controllers/usersGroups/add_selected_users_controller",

			"vvcontrollerdocumentproperties": "JMVC/vault_admin/controllers/document_properties_controller",
			"vvcontrolleradddocproperty": "JMVC/vault_admin/controllers/add_doc_property_controller",
			"vvcontrollerpicklist": "JMVC/vault_admin/controllers/picklist_controller",
			"vvcontrollernotificationdetail": "JMVC/vault_admin/controllers/notifications/notification_detail_controller",
			"vvcontrollernotificationslist": "JMVC/vault_admin/controllers/notifications/notifications_list_controller",

			"vvcontrollerfilesettings": "JMVC/vault_admin/controllers/settings/file_settings_controller",
			"vvcontrollersecuritysettings": "JMVC/vault_admin/controllers/settings/security_settings_controller",
			"vvcontrollerversioningsettings": "JMVC/vault_admin/controllers/settings/versioning_settings_controller",
			"vvcontrollerbranding": "JMVC/vault_admin/controllers/settings/branding_controller",
			"vvcontrollerlanguagesettings": "JMVC/vault_admin/controllers/settings/language_settings_controller",
			"vvcontrollerdynamicfeature": "JMVC/vault_admin/controllers/dynamic_feature_controller",
			"vvcontrolleremail": "JMVC/vault_admin/controllers/email_controller",
			"vvcontrolleremailconfiguration": "JMVC/vault_admin/controllers/email_configuration_controller",
			"vvcontrollergeneralsettings" : "JMVC/vault_admin/controllers/settings/general_settings_controller",
			"vvcontrollersettings" : "JMVC/vault_admin/controllers/settings/settings_controller",
			"vvcontrollerrenditionsettings" : "JMVC/vault_admin/controllers/settings/rendition_settings_controller",
			"vvcontrollerssosettings" : "JMVC/vault_admin/controllers/settings/sso_settings_controller",
			"vvcontrollersystemmessage" : "JMVC/vault_admin/controllers/settings/system_message_controller",
			"vvcontrollerloginmessage" : "JMVC/vault_admin/controllers/login_message_controller",

			"vvcontrollerhelpsettings" : "JMVC/vault_admin/controllers/settings/help_settings_controller",
			"vvcontrollernetworkaccesssettings" : "JMVC/vault_admin/controllers/settings/network_access_settings_controller",
			"vvcontrollertoolbox" : "JMVC/vault_admin/controllers/toolbox_controller",
			"vvcontrollerauditlog": "JMVC/vault_admin/controllers/audit_log_controller",
			"vvcontrollerdocumentcategories" :"JMVC/vault_admin/controllers/document_categories_controller",
			"vvcontrollercontentsetup2" : "JMVC/vault_admin/controllers/content_setup_2_controller",
			"vvcontrolleroverlays" : "JMVC/vault_admin/controllers/overlays_controller",
			"vvcontrollerpropertieslayout" : "JMVC/vault_admin/controllers/properties_layout_controller",
			"vvcontrollersignaturetemplates" : "JMVC/vault_admin/controllers/signature_templates_controller",
			"vvcontrollersecurityoverrides" : "JMVC/vault_admin/controllers/docProperties/security_overrides_controller",

			"vvcontrollersendpackage" : "JMVC/vault_admin/controllers/catalogs/send_package_controller",
			"vvcontrollerproductcatalog" : "JMVC/vault_admin/controllers/catalogs/product_catalog_controller",
			"vvcontrollercountrycatalog" : "JMVC/vault_admin/controllers/catalogs/country_catalog_controller",
			"vvcontrollercrfimport": "JMVC/vault_admin/controllers/catalogs/crf_import_controller",

			"vvcontrollerbindertemplatesdetails": "JMVC/vault_admin/controllers/docTemplates/binder_templates_detail_controller",
			"vvcontrollerbindertemplatestree": "JMVC/vault_admin/controllers/docTemplates/binder_templates_tree_controller",
			"vvcontrollerdocumenttemplatesdetails": "JMVC/vault_admin/controllers/docTemplates/document_templates_detail_controller",
			"vvcontrollerdocumenttemplateslist": "JMVC/vault_admin/controllers/docTemplates/document_templates_list_controller",

			"vvcontrollerdomaininfo": "JMVC/vault_admin/controllers/domainSettings/domain_information_controller",
			"vvcontrollerdomainsettings": "JMVC/vault_admin/controllers/domainSettings/domain_settings_controller",
			"vvcontrollersecuritypolicies": "JMVC/vault_admin/controllers/domainSettings/security_policies_controller",

			"vvcontrollergenericmembers": "JMVC/vault_admin/controllers/generic/generic_members_controller",

			"vvcontrollerentryactions": "JMVC/vault_admin/controllers/lifecycles/entry_actions_controller",
			"vvcontrollerentrycriteria": "JMVC/vault_admin/controllers/lifecycles/entry_criteria_controller",
			"vvcontrolleresignaturepages": "JMVC/vault_admin/controllers/lifecycles/esignature_pages_controller",
			"vvcontrollerexpiry": "JMVC/vault_admin/controllers/lifecycles/expiry_controller",
			"vvcontrollerlifecycles": "JMVC/vault_admin/controllers/lifecycles/lifecycles_controller",

            "vvcontrollerobjectlifecyclelist": "JMVC/vault_admin/controllers/objectLifecycles/object_lifecycle_list_controller",
            "vvcontrollerobjectlifecycledetail": "JMVC/vault_admin/controllers/objectLifecycles/object_lifecycle_detail_controller",
            "vvcontrollerobjectlifecyclestatedetail": "JMVC/vault_admin/controllers/objectLifecycles/object_lifecycle_state_detail_controller",
            "vvcontrollerobjectlifecyclestateUA": "JMVC/vault_admin/controllers/objectLifecycles/object_lifecycle_state_UA_controller",
            "vvcontrollerobjectlifecyclestateEA": "JMVC/vault_admin/controllers/objectLifecycles/object_lifecycle_state_EA_controller",
            
            "vvcontrollerobjectworkflowlist": "JMVC/vault_admin/controllers/objectWorkflows/object_workflow_list_controller",
            "vvcontrollerobjectworkflowdetail": "JMVC/vault_admin/controllers/objectWorkflows/object_workflow_detail_controller",
			"vvcontrollerobjectworkflowstep": "JMVC/vault_admin/controllers/objectWorkflows/object_workflow_step_controller",

			"vvcontrollerlifecyclestatecolors": "JMVC/vault_admin/controllers/lifecycles/lifecycle_state_colors_controller",
			"vvcontrollerroles": "JMVC/vault_admin/controllers/lifecycles/roles_controller",
			"vvcontrollerroledefaultrule": "JMVC/vault_admin/controllers/lifecycles/role_default_rule_controller",
			"vvcontrollerroleoverriderules": "JMVC/vault_admin/controllers/lifecycles/role_override_rules_controller",
            "vvcontrollerrolesharingruledetail": "JMVC/vault_admin/controllers/lifecycles/role_sharing_rule_detail_controller",
            "vvcontrollerrolesharingrulelist": "JMVC/vault_admin/controllers/lifecycles/role_sharing_rules_controller",
            "vvcontrollersharingruleslist": "JMVC/vault_admin/controllers/generic/sharing_rules_list_controller",
			"vvcontrollerlifecyclesecuritysettings": "JMVC/vault_admin/controllers/lifecycles/security_settings_controller",
			"vvcontrollerstates": "JMVC/vault_admin/controllers/lifecycles/states_controller",
			"vvcontrolleruseractions": "JMVC/vault_admin/controllers/lifecycles/user_actions_controller",
			"vvcontrollerworkflowdecision": "JMVC/vault_admin/controllers/lifecycles/workflow_decision_controller",
			"vvcontrollerworkflowpropertydecision": "JMVC/vault_admin/controllers/lifecycles/workflow_property_decision_controller",
			"vvcontrollerworkflowstep": "JMVC/vault_admin/controllers/lifecycles/workflow_step_controller",
			"vvworkflowupdatedocumentcontroller": "JMVC/vault_admin/controllers/lifecycles/workflow_update_document_controller",
			"vvcontrollerworkflowwad": "JMVC/vault_admin/controllers/lifecycles/workflow_wad_controller",
			"vvcontrollerworkflows": "JMVC/vault_admin/controllers/lifecycles/workflows_controller",
			"vvcontrollersitesetup": "JMVC/vault_admin/controllers/objects/site_setup_controller",
			"vvcontrollervofobjectdata": "JMVC/vault_admin/controllers/objects/vof_object_data_controller",
			"vvcontrollervofobjectfield": "JMVC/vault_admin/controllers/objects/vof_object_field_controller",
            "vvcontrollervofobjectconditionbuilderfield": "JMVC/vault_admin/controllers/objects/vof_object_field_condition_builder_controller",
			"vvcontrollervofobjectlayout": "JMVC/vault_admin/controllers/objects/vof_object_layout_controller",
            "vvcontrollervofobjectpagelayout": "JMVC/vault_admin/controllers/objects/vof_object_page_layout_controller",
            "vvcontrollervofobjectpagelayoutdetail": "JMVC/vault_admin/controllers/objects/vof_object_page_layout_detail_controller",
            "vvcontrollervofobjectpagelayoutbase": "JMVC/vault_admin/controllers/objects/vof_object_page_layout_base_controller",
			"vvcontrollervofobjectpagelayoutrelateddata": "JMVC/vault_admin/controllers/objects/vof_object_page_layout_related_data_controller",
			"vvcontrollervofobjectpagelayoutrelatedobject": "JMVC/vault_admin/controllers/objects/vof_object_page_layout_related_object_controller",
			"vvcontrollervofobjectpagelayoutrelateddoc": "JMVC/vault_admin/controllers/objects/vof_object_page_layout_related_doc_controller",
			"vvcontrollervofobjectsecurity": "JMVC/vault_admin/controllers/objects/vof_object_security_controller",
			"vvcontrollervofobjectsecuritydetail": "JMVC/vault_admin/controllers/objects/vof_object_security_detail_controller",
            "vvconditionbuildercontroller": "JMVC/vault_admin/controllers/objects/ConditionBuilderController",
            "vvcontrollervofobjectsecuritypreview": "JMVC/vault_admin/controllers/objects/vof_object_security_preview_controller",
            "vvcontrollervofaddmembersdialog": "JMVC/vault_admin/controllers/objects/vof_add_members_dialog_controller",
            "vvcontrollervofobjectsecurityutil": "JMVC/vault_admin/controllers/objects/vof_object_security_util_controller",
			"vvcontrollervofobjectrelationships": "JMVC/vault_admin/controllers/objects/vof_object_relationships_controller",
			"vvcontrollervofobjectschema": "JMVC/vault_admin/controllers/objects/vof_object_schema_controller",
			"vvcontrollervofsitedetail": "JMVC/vault_admin/controllers/objects/vof_site_detail_controller",
			"vvcontrollervofstudydetail": "JMVC/vault_admin/controllers/objects/vof_study_detail_controller",
			"vvcontrollervofclinicalstudydetail": "JMVC/vault_admin/controllers/objects/vof_clinical_study_detail_controller",
			"vvcontrollervofattachments": "JMVC/vault_admin/controllers/objects/vof_attachments_controller",
			"action.vof.delete": "JMVC/veeva_vault/controllers/vof/action.vof.deleteVofRecord",
            "action.vof.execLcAction": "JMVC/veeva_vault/controllers/vof/action.vof.lcActionExecutor", //execStateActionOnRecord stateaction
            "action.vof.lc.base": "JMVC/veeva_vault/controllers/vof/action.vof.lc.base",
            "action.vof.lc.Custom": "JMVC/veeva_vault/controllers/vof/action.vof.lc.Custom",
            "action.vof.lc.RunWorkflow": "JMVC/veeva_vault/controllers/vof/action.vof.lc.RunWorkflow",
            "action.vof.task": "JMVC/veeva_vault/controllers/vof/action.vof.task",
			"action.vof.report": "JMVC/veeva_vault/controllers/vof/action.vof.report",
            "action.vof.copyrecord": "JMVC/veeva_vault/controllers/vof/action.vof.copyVofRecord",


			"vvcontrollerrelationshipdetail": "JMVC/vault_admin/controllers/relationships/relationship_detail_controller",
			"vvcontrollerrelationshiplist": "JMVC/vault_admin/controllers/relationships/relationship_list_controller",

            "vvcontrollercustomactiondetail": "JMVC/vault_admin/controllers/customAction/custom_action_detail_controller",
            "vvcontrollercustomactionlist": "JMVC/vault_admin/controllers/customAction/custom_action_list_controller",

            "admin.page.searchfieldlist": "JMVC/vault_admin/controllers/admin.page.SearchFieldList",

            "admin.page.ssoprofilelist": "JMVC/vault_admin/controllers/settings/admin.page.SSOProfileList",
            "action.sso.deleteSsoProfile": "JMVC/vault_admin/controllers/settings/action.sso.deleteSsoProfile",

         "vvcontrollercustomtabsconfig": "JMVC/vault_admin/controllers/customTabs/custom_tabs_config_controller",
         "vvcontrollertabdetail": "JMVC/vault_admin/controllers/customTabs/tab_detail_controller",
         "vvcontrollertabsubdetail": "JMVC/vault_admin/controllers/customTabs/tab_subdetail_controller",
         "vvcontrollercontainersubdetail": "JMVC/vault_admin/controllers/customTabs/container_subdetail_controller",
         "vvcontrollerobjectsubdetail": "JMVC/vault_admin/controllers/customTabs/object_subdetail_controller",
         "vvcontrollerdoctypesubdetail": "JMVC/vault_admin/controllers/customTabs/doctype_subdetail_controller",
         "vvcontrollerwebsubdetail": "JMVC/vault_admin/controllers/customTabs/web_subdetail_controller",

            "vvcontrolleroperations": "JMVC/vault_admin/controllers/operations_controller",
            "vvcontrollerjobdefinitionlist": "JMVC/vault_admin/controllers/jobDefinition/job_definition_list_controller",
            "vvcontrollerjobdefinitiondetail": "JMVC/vault_admin/controllers/jobDefinition/job_definition_detail_controller",
            "vvcontrollerjobstatus": "JMVC/vault_admin/controllers/jobStatus/job_status_controller",
            "vvcontrollerjobstatuslist": "JMVC/vault_admin/controllers/jobStatus/job_status_list_controller",
            "vvcontrollerscheduledjobstatuslist": "JMVC/vault_admin/controllers/jobStatus/scheduled_job_status_list_controller",
            "vvcontrollerrunningjobstatuslist": "JMVC/vault_admin/controllers/jobStatus/running_job_status_list_controller",
            "vvcontrollerjobhistorieslist": "JMVC/vault_admin/controllers/jobStatus/job_histories_list_controller",
         // vault enterprise controllers
			"vecontrollerhome": "JMVC/vault_enterprise/controllers/enterprise_home_controller",
			"vecontrollernav": "JMVC/vault_enterprise/controllers/enterprise_nav_controller",
			"vecontrollersearch": "JMVC/vault_enterprise/controllers/enterprise_search_controller",

			// vault_binders controllers
			"vvcontrollertmfselector": "JMVC/vault_binders/controllers/tmf_selector_controller",
			"vvbindercontroller": "JMVC/vault_binders/controllers/binders_controller",
			"vvbindertreecontroller": "JMVC/vault_binders/controllers/binder_tree_controller",
			"vvbinderutilcontroller": "JMVC/vault_binders/controllers/binder_util_controller",
			"vvcontrollereditbinder": "JMVC/vault_binders/controllers/edit_binders_controller",
			"vvcontrollerexportbinder": "JMVC/vault_binders/controllers/export_binder_controller",
			"vvcontrollerasyncexportbinder": "JMVC/vault_binders/controllers/async_export_binder_controller",
//			"vveditbinderscontroller": "JMVC/vault_binders/controllers/edit_binders_controller",

            // utilities
            "vvgroupmemberstooltip": "JMVC/veeva_vault/utilities/group_members_tooltip",

            // public distribution controllers
            "vvcontrollerpublicdistribution": "JMVC/veeva_vault/controllers/distribution/publicdistribution/public_distribution_controller",

			// vault models
			"vvmodelutil": "JMVC/veeva_vault/models/util",
            "vvmodelbase": "JMVC/veeva_vault/models/base",
            "serverResultHandler": "JMVC/veeva_vault/utilities/server_result_handler",
            "vvautocompletesource": "JMVC/veeva_vault/utilities/auto_complete_source",
            "vvcache": "JMVC/veeva_vault/utilities/cache",
			"vvlookupchangeconfirmation": "JMVC/veeva_vault/utilities/vof_lookup_change_confirmation",
            "vvcounter": "JMVC/veeva_vault/utilities/counter",
            "vvgreatestcommonsubsets": "JMVC/veeva_vault/utilities/greatest_common_subsets",
			"vvmodelveevadocument": "JMVC/veeva_vault/models/veeva_document",
			"vvmodelfavorites": "JMVC/veeva_vault/models/favorites",
			"vvmodelworkflow": "JMVC/veeva_vault/models/workflow",
			"vvmodeluserprofile": "JMVC/veeva_vault/models/user_profile",
			"vvmodelvofutil": "JMVC/veeva_vault/models/vof_util",
			"vvmodelproxy": "JMVC/veeva_vault/models/proxy",
			"vvmodelinbox": "JMVC/veeva_vault/models/inbox",
			"vvmodelreporting": "JMVC/veeva_vault/models/reporting",
            "vvmodelvaultloader": "JMVC/veeva_vault/models/vaultLoader",
			"vvmodelmoreactions" : "JMVC/veeva_vault/models/more_actions",
			"vvmodelrendition": "JMVC/veeva_vault/models/rendition",
			"vvmodeldashboard" : "JMVC/veeva_vault/models/dashboards",
			"vvmodeladdcontent" : "JMVC/veeva_vault/models/add_content",
			"vvmodelobjectrecord" : "JMVC/veeva_vault/models/object_record",
			"vvmodelactivecache": "JMVC/veeva_vault/models/active_cache",
			"vvmodelveevauser": "JMVC/veeva_vault/models/veeva_user",
			"vvmodelbulkaction": "JMVC/veeva_vault/models/bulk_action",
			"vvmodeldelegateaccess": "JMVC/veeva_vault/models/delegateAccess",
			"vvmodelcustomaction": "JMVC/veeva_vault/models/custom_action",
			"vvmodelattachments": "JMVC/veeva_vault/models/attachments",
			"vvmodelemailparticipants": "JMVC/veeva_vault/models/workflowActions/email_participants",
            "vvmodelupdateworkflowdates": "JMVC/veeva_vault/models/workflowActions/update_workflow_dates",
            "vvmodelpagelayout": "JMVC/veeva_vault/models/page_layout",
			"vvmodelrimsaviewer": "JMVC/veeva_vault/models/rimSaViewer",
			"tabpreference": "JMVC/veeva_vault/models/tab_preference",
            "vvmodelpublicdistribution": "JMVC/veeva_vault/models/distribution/publicdistribution/public_distribution",

			//binder models
			"vvmodelbinders": "JMVC/vault_binders/models/binders",
			"vvmodelexportbinder": "JMVC/vault_binders/models/exportBinder",

			"vvcontrollerarchiveviewer": "JMVC/veeva_vault/controllers/arcViewer/archive_viewer_controller",

			// admin models
			"vvmodeladmin": "JMVC/vault_admin/models/admin",
			"vvmodelbindertemplates": "JMVC/vault_admin/models/binderTemplates",
			"vvmodelbranding": "JMVC/vault_admin/models/branding",
			"vvmodeldependantproperties": "JMVC/vault_admin/models/dependent_properties",
			"vvmodeldocprops": "JMVC/vault_admin/models/docProps",
			"vvmodeldoctemplates": "JMVC/vault_admin/models/docTemplates",
			"vvmodeldoctypes": "JMVC/vault_admin/models/docTypes",
			"vvmodeldomainsettings": "JMVC/vault_admin/models/domain_settings",
			"vvmodelexpiry": "JMVC/vault_admin/models/expiry",
			"vvmodelgroups": "JMVC/vault_admin/models/groups",
			"vvmodelhelpsettings": "JMVC/vault_admin/models/helpSettings",
			"vvmodellanguage": "JMVC/vault_admin/models/language",
			"vvmodellifecycles": "JMVC/vault_admin/models/lifecycles",
			"vvmodellifecyclestatecolors": "JMVC/vault_admin/models/lifecycle_state_colors",
			"vvmodelrolesharingrules": "JMVC/vault_admin/models/role_sharing_rules",
			"vvmodelworkflowrolerules": "JMVC/vault_admin/models/workflow_role_rules",
			"vvmodelloginmessage": "JMVC/vault_admin/models/loginMessage",
			"vvmodelobjectfield": "JMVC/vault_admin/models/object_field",
			"vvmodelobjectlayout": "JMVC/vault_admin/models/object_layout",
			"vvmodelobjectsecurity": "JMVC/vault_admin/models/object_security",
			"vvmodelrecordsharingsettings": "JMVC/vault_admin/models/record_sharing_settings",
			"vvmodelobjectschema": "JMVC/vault_admin/models/object_schema",
			"vvmodelrelationships": "JMVC/vault_admin/models/relationships",
			"vvmodeladmincustomactions": "JMVC/vault_admin/models/custom_actions",
			"vvmodeladminnotificationtemplate": "JMVC/vault_admin/models/notificationtemplate",
			"vvmodelreporttype": "JMVC/vault_admin/models/report_type",
			"vvmodelrenditions": "JMVC/vault_admin/models/renditions",
			"vvmodelsecurityprofiles": "JMVC/vault_admin/models/security_profiles",
			"vvmodelsendpackage": "JMVC/vault_admin/models/sendPackage",
			"vvmodelsettings": "JMVC/vault_admin/models/settings",
			"vvmodelsignaturetemplate": "JMVC/vault_admin/models/signatureTemplates",
			"vvmodelstudies": "JMVC/vault_admin/models/studies",
			"vvmodelsystemmessage": "JMVC/vault_admin/models/systemMessage",
			"vvmodelusers": "JMVC/vault_admin/models/users",
			"vvmodelusersgroups": "JMVC/vault_admin/models/users_groups",
			"vvmodeladminworkflow": "JMVC/vault_admin/models/workflows",
			"vvmodelpermissionsets": "JMVC/vault_admin/models/permission_sets",
			"vvmodeljobdefinitions": "JMVC/vault_admin/models/job_definitions",
        	"vvmodelcustomtabs": "JMVC/vault_admin/models/customTabs",
        	"vvmodeljobstatus": "JMVC/vault_admin/models/job_status",
            "vvmodelsecuritysettings": "JMVC/vault_admin/models/security_settings",
            "vvmodelformula": "JMVC/vault_admin/models/formula",
            "vvmodelobjectlifecycles": "JMVC/vault_admin/models/object_lifecycles",
            "vvmodelobjectworkflows": "JMVC/vault_admin/models/object_workflows",
            "vvmodelsearchfields": "JMVC/vault_admin/models/searchable_fields",
			"vvmodeloverlays": "JMVC/vault_admin/models/overlays",
            "vvmodelssoprofiles": "JMVC/vault_admin/models/sso_profiles",


			// enterprise models
			"vemodelenterprise": "JMVC/vault_enterprise/models/enterprise_data",

			"vvmodelsubmission": "JMVC/veeva_vault/models/submission",

			//annotate
			"annotatetmpldir": 'annotate/templates',
			"rexmin": "annotate/base/REXMIN",
			"browser": "annotate/base/BROWSER",
			"dom": "annotate/base/DOM",
			"util": "annotate/base/UTIL",
			"preference": "annotate/base/PREFERENCES",
			"ufocus": "annotate/base/UFOCUS",
			"events": "annotate/base/Events",
			"pagechooser": "annotate/pdfdoc/PageChooser",
			"pdfmulti": "annotate/pdfdoc/PDFMulti",
			"thumbnailview": "annotate/pdfdoc/thumbnailView",
			"store": "annotate/datamodel/Store",
			"notestore": "annotate/veeva/Vault/Stores/NoteStore",
			"pagestore": "annotate/veeva/Vault/Stores/PageStore",
			"revdiffs": "annotate/datamodel/RevDiffs",
			"tooltip": "annotate/guilib/ToolTip",
			"colorset": "annotate/guilib/ColorSet",
			"hsv": "annotate/guilib/HSV",
			"linkbutton": "annotate/guilib/LinkButton",
			"imgtextbutton": "annotate/guilib/ImgTextButton",
			"radiogroup": "annotate/guilib/RadioGroup",
			"textinput": "annotate/guilib/TextInput",
			"popupmenu": "annotate/guilib/PopupMenu",
			"buttonmenu": "annotate/guilib/ButtonMenu",
			"borders": "annotate/guilib/Borders",
			"expandcollapsediv": "annotate/guilib/ExpandCollapseDiv",
			"handle": "annotate/guilib/Handle",
			"movable": "annotate/guilib/Movable",
			"boxextender": "annotate/guilib/BoxExtender",
			"multichooser": "annotate/guilib/MultiChooser",
			"chkbox": "annotate/guilib/Chkbox",
			"choice": "annotate/guilib/Choice",
			"nchoice": "annotate/guilib/NChoice",
			"textarea": "annotate/guilib/TextArea",
			"fixeddialog": "annotate/guilib/FixedDialogs",
			"markbomb": "annotate/guilib/MarkBomb",
			"drawings": "annotate/customgui/Drawings",
			"docpreview": "annotate/customgui/DocPreview",
			"indextagpanel": "annotate/customgui/IndexTagPanel",
			"server": "annotate/edit/Server",
			"system": "annotate/edit/SYSTEM",
			"zentoolbars": "annotate/pdfnotes/ZenToolbars",
			"drawingarea": "annotate/pdfnotes/DrawingArea",
			"searchsort": "annotate/pdfnotes/SearchSort",
			"imgtextui": "annotate/pdfnotes/IMGTextUI",
			"notesdisplay": "annotate/pdfnotes/NotesDisplay",
			"pagemanager": "annotate/pdfnotes/PageManager",
			"animator": "annotate/pdfnotes/Animator",
			"notepad": "annotate/pdfnotes/Notepad2",
			"regionselection": "annotate/pdfnotes/RegionSelection",
			"arrowselection": "annotate/pdfnotes/ArrowSelection",
			"pdfsearch": "annotate/pdfnotes/PDFSearch2",
			"config": "annotate/pdfnotes/config",
			"veevastore": "annotate/veeva/Vault/Stores/Store",
			"veevalink": "annotate/veeva/Vault/Models/Link",
			"veevanote": "annotate/veeva/Vault/Models/Note",
			"notescontroller": "annotate/veeva/Vault/Controllers/NotesController",
			"notecontroller": "annotate/veeva/Vault/Controllers/NoteController",
			"incominglinksdialog": "annotate/dialogs/IncomingLinksDialog",
			"tagsdialog": "annotate/dialogs/TagsDialog2",
			"bookmark": "annotate/pdfdoc/Bookmark",
			"bfa": "annotate/dialogs/BringForwardAnnotation",
			"dialoghelper": "annotate/dialogs/DialogHelper",
			"urlutils": "annotate/util/urlUtils",
			"logger": "JMVC/veeva_vault/resources/scripts/veeva/logger",
			"usergrouputils": "JMVC/veeva_vault/resources/scripts/veeva/utils/UserGroupUtils",
			"DialogValidatorUtils": "components/common/util/DialogValidatorUtils",
			"embeddedlinks": "annotate/pdfdoc/EmbeddedLink", 
			"infocardlistview" : "annotate/veeva/Vault/Controllers/InfocardListView",
			"delbubble": "annotate/pdfnotes/DelBubble",
            "pagemodel": "annotate/veeva/Vault/Models/PageModel",

            /** Flowchart **/
            "vvworkflowflowchart" : "JMVC/vault_admin/resources/scripts/veeva.ui.workflowFlowchart",
            "vvdocumentwfflowchart" : "JMVC/vault_admin/resources/scripts/flowchart/veeva.ui.documentWfFlowchart",
            "vvSVGUtil" : "JMVC/vault_admin/resources/scripts/SVGHelperUtil",

			/** Vault Navigation Components **/
			"component.page": "components/common/navigation/BasePage",
			"component.listpage": "components/common/navigation/ListPage",
            "component.facetlistpage": "components/common/navigation/FacetListPage",
			"view.listView" : "components/common/listView/views/ListView",

			/** Vault Navigation Pages (Backbone based)**/
			"component.grid" : 					"components/common/grid/views/Grid",
			"component.grid.gridModel" : 	"components/common/grid/models/gridModel",
			"component.columnEditor" : 			"components/common/grid/views/columnEditor",
			"component.userCard" : 			"components/common/grid/views/userCard",
			"component.widgethelper.dropdownHelper" : "components/common/widgethelper/dropdownHelper",

			"component.data.vaultDataSource":	"components/common/data/vaultDataSource",

            "component.dialog": "components/common/dialog/Dialog",

			"common.registry" : "components/common/util/Registry",
			"common.fileUtil": "components/common/util/FileUtil",
			"components.formatRegistry" : "components/common/formatter/FormatRegistry",
			"components.dateFormats" : "components/common/formatter/DateFormats",
			"components.linkFormatter" : "components/common/formatter/LinkFormatter",
			"components.actionLinkFormatter" : "components/common/formatter/ActionLinkFormatter",
			"components.textlistFormatter" : "components/common/formatter/TextListFormatter",
			"components.textFormatter" : "components/common/formatter/TextFormatter",
			"components.objectFormatter" : "components/common/formatter/ObjectFormatter",
			"components.picklistFormatter" : "components/common/formatter/PicklistFormatter",
			"components.userFormatter" : "components/common/formatter/UserFormatter",
			"components.removeFormatter" : "components/common/formatter/RemoveFormatter",
            "components.formattedTextFormatter": "components/common/formatter/FormattedTextFormatter",
			"components.solrFormatter" : "components/common/formatter/SolrFormatter",

            /** VOF Components **/
            "components.vof.service.breadcrumbBuilder": "components/vof/service/BreadcrumbBuilder",
            "components.vof.recordLcActionRegistry": "components/vof/registry.vof.lcActions",

            "common.tooltip.help": "components/common/tooltip/help/common.tooltip.help",
            //
            "document.view.manager": "components/document/document.view.manager",
            //
            "document.actions": "components/document/actions/document.actions",
            "document.actions.sendAsLink": "components/document/actions/document.actions.sendAsLink",
            //
            "document.sharing.model": "components/document/sharing/models/document.sharing.model",
            "document.sharing.roles": "components/document/sharing/models/document.sharing.roles",
            "document.sharing.mini": "components/document/sharing/views/document.sharing.mini",
            "document.sharing.stub": "components/document/sharing/views/document.sharing.stub",
            "document.sharing.page": "components/document/sharing/views/document.sharing.page",
            "document.sharing.add": "components/document/sharing/views/document.sharing.add",
            "document.sharing.row": "components/document/sharing/views/document.sharing.row",
            //
            "session": "components/session/session",

            /** Workflow Components**/
            "lifecycle.workflow.startDialogDisplay" : "components/lifecycle/workflow/lifecycle.workflow.startDialogDisplay",

            /* StyleGuide */

			/* Vault Pages */
			"vault.dashboards" : "scripts/packages/pages/vault.dashboards",
			"vault.library" : "scripts/packages/pages/vault.library",
			"vault.content" : "scripts/packages/pages/vault.content",
            "vault.vaultloader" : "scripts/packages/pages/vault.vaultloader",
			"vault.rimSaViewer" : "scripts/packages/pages/vault.rimSaViewer",



			/* Reusable Components */
			"components.docviewer" : "scripts/packages/components/components.docviewer",

			/* Admin Pages */
			"admin.main" : "scripts/packages/pages/admin.main",
			"admin.settings" : "scripts/packages/pages/admin.settings",
			"admin.configuration" : "scripts/packages/pages/admin.configuration",
			"admin.operations" : "scripts/packages/pages/admin.operations",
			"admin.toolbox" : "scripts/packages/pages/admin.toolbox",
			"admin.usersgroups" : "scripts/packages/pages/admin.usersgroups"



		},

		"shim": {

			"jquery": { "exports": "jQuery" },
			"jquerymigrate": { "deps": ["jquery"] },
			"jqueryui": { "deps": ["jquerymigrate"] },
			"underscore": { "exports": "_" },
			"cssua": { "exports": "cssua" },
			"json": { "exports": "JSON" },
			"jsplumb": {
                "deps": ["jquerymigrate"],
                "exports": "jsplumb"
            },
			"jqueryprofile":{
				"deps": ["jquerymigrate"]
			},
			"bootstrap.transition": {
				"deps": ["jquerymigrate"]
			},
			"bootstrap.collapse": {
				"deps": ["bootstrap.transition"]
			},
			"bootstrap.dropdown": {
				"deps": ["jquerymigrate"]
			},
			"bootstrap.affix": {
				"deps": ["jquerymigrate"]
			},
			"bootstrap.scrollspy": {
				"deps": ["jquerymigrate"]
			},
			"bubblepopup": {
				"deps": ["jqueryui"]
			},
			"highcharts": {
				"deps": ["jquerymigrate"],
				"exports": "Highcharts"
			},
			"highchartsmore": {
				"deps": ["highcharts"]
			},
			"highchartsexporting": {
				"deps": ["highcharts"]
			},
			"highchartstheme": {
				"deps": ["highcharts"]
			},
			"jqueryuidatepicker": {
				"exports": "jQuery.ui.datepicker",
				"deps": ["jqueryui"]
			},
			"jquerytooltip": {
				"deps": ["jqueryui"]
			},
			"jqueryuiautocomplete": {
				"deps": ["jqueryui"]
			},
			"jqueryautogrowinput": {
				"deps": ["jquerymigrate"]
			},
			"jquerycookie": {
				"deps": ["jquerymigrate"]
			},
			"jquerysortelement": {
				"deps": ["jquerymigrate"]
			},
			"jquerywatermark": {
				"deps": ["jquerymigrate"]
			},
			"jqueryidletimeout": {
				"deps": ["jquerymigrate", "jqueryidletimer"]
			},
			"jqueryidletimer": {
				"deps": ["jquerymigrate"]
			},
			"jqueryautosize": {
				"deps": ["jquerymigrate"]
			},
			"jqueryuitouchpunch": {
				"deps": ["jqueryui"]
			},
			"jquerydrop": {
			   "deps": ["jqueryui"],
				"exports": "jQuery.drop"
         	},
			"jquerydrag": {
				"deps": ["jquerymigrate"],
				"exports": "jQuery.drag"
			},
			 "jqueryclickoutside": {
				deps: ["jquerymigrate"],
				exports: "jQuery.clickOutside"
			 },
			"veevaselect": {
				"deps": ["jquerymigrate"],
				"exports": "select"
			},
			"veevaaccordian": {
				"deps": ["jqueryui"],
				"exports": "veevaAccordian"
			},
			"jqueryvalidate": {
				"deps": ["jqueryui"],
				"exports": "jQuery.validate"
			},
			"vvparentsortpage":{
				"deps": ["jqueryui", "vvpagingwidget"]
			},
			"moreless" :{
				"deps": ["jqueryui"]
			},
			"hotkeys":{
				"deps":["jquerymigrate"]
			},
			"jquerytree":{
				"deps": ["jquerymigrate", "hotkeys"]
			},
			"veevajstree":{
				"deps":["jquerytree","hotkeys"]
			},
			"formulaeditor": {
				"deps": ["jqueryui", "underscore", "jqueryuiautocomplete", "jqueryautogrowinput"],
				"exports": "formulaeditor"
			},
			"bbq": {
				"deps": ["jquerymigrate"],
				"exports": "bbq"
			},
			"jquerytextinputs": {
				"deps": ["jquerymigrate"],
				"exports": "jQuery.textinputs"
			},
			"slickeditor": {
				"deps": ["jquerymigrate"]
			},
			"slickdataview": {
				"deps": ["jquerymigrate"]
			},
			"jquerydatatable":{
				"deps": ["jquerymigrate"]
			},
			"slickcore": {
				"deps": ["jquerymigrate"]
			},
			"slickgrid": {
				"deps": ["jquerymigrate", "jquerydrag", "slickcore", "slickdataview", "slickeditor"]
			},
			"jqueryform" :{
				"deps": ["jquerymigrate"]
			},
         "colorpicker": {
            "deps": ["jquerymigrate"]
         },
         "lazyscrollloader": {
            "deps": ["jquerymigrate"]
         },
			/** Veeva Vault Plugins */
			"veevatokenator": {
				"deps": ["jqueryui","jquerytextinputs"]
			},

			"singlefileupload": {
				"deps": ["jqueryui"]
			},
			"vvmultifileselect": {
				"deps": ["jqueryui", "jquerytooltip"]
			},

			"searchfilter": {
				"deps": ["jqueryui", "jquerytextinputs"]
			},
			"veevauiautocomplete": {
				"deps": ["jqueryui", "jqueryuiautocomplete", "jqueryautogrowinput", "underscore", "jquerytooltip"]
			},

			"veevasearchbar": {
				"deps": ["jqueryui", "jquerywatermark"]
			},
			"fgmenu": {
				"deps": ["jquerymigrate"]
			},
			"blockui": {
				"deps": ["jquerymigrate"]
			},
			"combobox": {
				"deps": ["jqueryuiautocomplete"]
			},
			"truncatetext": {
				"deps": ["jqueryui", "jquerytooltip"]
			},
			"rolodex": {
				"deps": ["jqueryui"]
			},
			"veevachunk": {
				"deps": ["jqueryui"]
			},
			"itemview": {
				"deps": ["jqueryui", "fgmenu"]
			},
			"wizarddialog": {
				"deps": ["jqueryui"]
			},
			"wizardpage": {
				"deps": ["wizarddialog"]
			},
			"gridtree": {
				"deps": ["jqueryui", "jquerydrop", "slickgrid", "veevamenu"]
			},
			"gridtable": {
				"deps": ["gridtree"]
			},
			"veevamenu":{
				"deps": ["jqueryui", "underscore", "jqueryclickoutside"]
			},

			"nestedmenu":{
				"deps": ["veevamenu"]
			},
			"colreorderresize": {
			    "deps":["jqueryui", "jquerydatatable"]
			},

			/** Widgets  **/

			"resizabletoolbar":{
				"deps": ["jqueryui","underscore"]
			},

			"vvpagingwidget":{
				"deps": ["jqueryui","bbq"]
			},
			"docviewexpanderwidget":
			{
				"deps": ["jqueryui"]
			},
			"veevainlineedit":
			{
				"deps": ["jqueryui"]
			},
            "vaultwindowmanager": {
                "exports": "Vault.WindowManager"
            }
		},

		"hbs": {
			"helpers": true,
			"disableI18n": true,
			"templateExtension": 'hbs',
			"partialsUrl": '',
			"helperDirectory" : "templates/helpers/"
		},

		"config": {
			"moment": {
				"noGlobal": true
			}
		}
	};
