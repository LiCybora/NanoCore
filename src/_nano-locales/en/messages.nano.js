// JSON does not allow comments, which makes things too painful
(() => {
    "use strict";
    return {
        // Dialog buttons
        "genericYes": {
            "message": "Yes",
            "description": "The word yes, used in dialogs"
        },
        "genericNo": {
            "message": "No",
            "description": "The word no, used in dialogs"
        },
        "genericOK": {
            "message": "OK",
            "description": "The word OK, used in dialogs"
        },
        // Generic ialog messages
        "genericUnsavedChange": {
            "message": "Do you want to leave this tab? Changes you made will not be saved.",
            "description": "A warning when the user is about to leave a tab without saving"
        },
        "genericFilterReadError": {
            "message": "# Could not load data, please refresh.",
            "description": "Message to show when filter data could not be loaded"
        },
        "genericDataSaveError": {
            "message": "Could not save data, please try again.",
            "description": "Message to show when changes could not be saved"
        },
        "genericNothingToExport": {
            "message": "Nothing to export.",
            "description": "Message to show when the user clicked export to file button but there is nothing to export"
        },

        // New cloud UI
        "nanoCloudNoData": {
            "message": "No cloud data",
            "description": "English: No cloud data"
        },
        "nanoCloudLastSync": {
            "message": "Last sync: {{device}} at {{time}}",
            "description": "English: Last sync: {{device}} at {{time}}"
        },
        "nanoCloudSyncFailed": {
            "message": "Something went wrong:\n{{error}}",
            "description": "English: Something went wrong:\n{{error}}"
        },

        // Dashboard dialog messages
        "dashboardMutexError": {
            "message": "Could not obtain mutex lock, do you have another dashboard open?",
            "description": "Message to show when mutex lock is held by another instance of the dashboard"
        },

        // Settings groups
        "settingGeneralGroup": {
            "message": "General",
            "description": "Settings tab general group name"
        },
        "settingUserInterfaceGroup": {
            "message": "User interface",
            "description": "Settings tab user interface group name"
        },
        "settingOtherGroup": {
            "message": "Other",
            "description": "Settings tab other group name"
        },
        // Settings prompts
        "settingsDashboardAllowSelectionPrompt": {
            "message": "Allow text selection in dashboard",
            "description": "English: Allow text selection in dashboard"
        },
        "settingsEditorWordWrapPrompt": {
            "message": "Soft wrap long lines in filter editor",
            "description": "English: Soft wrap long lines in filter editor"
        },
        "settingsViewerWordWrapPrompt": {
            "message": "Soft wrap long lines in filter viewer",
            "description": "English: Soft wrap long lines in filter viewer"
        },
        // Extra strings for new dashboard
        "settingDiskUsage": {
            "message": "Disk usage: ",
            "description": "Disk usage prompt"
        },
        "settingMebibyte": {
            "message": " MiB",
            "description": "Symbol for mebibyte"
        },
        "settingsLastBackedupFilePrompt": {
            "message": "Last backed up file: ",
            "description": "Last backed up file name prompt"
        },
        "settingsLastRestoredFilePrompt": {
            "message": "Last restored file: ",
            "description": "Last restored file name prompt"
        },

        // The tab name of advanced settings
        "advancedPageName": {
            "message": "Advanced",
            "description": "Advanced settings tab name"
        },

        // Extra help messages for user filters
        "1pResourcesReference": {
            "message": "Nano comes with two sets of resources,",
            "description": "English: Nano Adblocker comes with two sets of resources,"
        },
        "1pResourcesOriginal": {
            "message": "uBlock Origin Resources",
            "description": "English: uBlock Origin Resources"
        },
        "1pResourcesAnd": {
            "message": "and",
            "description": "English: and"
        },
        "1pResourcesNano": {
            "message": "Nano Extra Resources",
            "description": "English: Nano Extra Resources"
        },
        "1pResourcesPeriod": {
            "message": ".",
            "description": "Period symbol"
        },
        "1pFilterEditorHelp": {
            "message": "Nano Filter Editor is powered by Ace and most shortcut keys works the same.",
            "description": "Explain the similarity between Nano Filter Editor and Ace in terms of shortcut keys"
        },

        // Whitelist linter limit warning
        "whitelistLinterAborted": {
            "message": "Nano did not scan the rest of the lines for errors because there are too many errors.",
            "description": "Warning message to show when the whitelist validator aborted because there are too many errors"
        },
        "whitelistLinterTooManyWarnings": {
            "message": "Nano did not scan the rest of the lines for warnings because there are too many warnings.",
            "description": "Warning message to show when Nano Whitelist Linter aborted because there are too many warnings"
        },
        // Whitelist linter error messages
        "whitelistLinterInvalidHostname": {
            "message": "This host name is not valid.",
            "description": "Error message to show when a hostname whitelist is not valid"
        },
        "whitelistLinterInvalidRegExp": {
            "message": "This regular expression has syntax errors.",
            "description": "Error message to show when a regular expression whitelist has syntax errors"
        },
        "whitelistLinterInvalidURL": {
            "message": "This URL is not valid.",
            "description": "Error message to show when a URL whitelist is not valid"
        },
        // Whitelist linter warning messages
        "whitelistLinterSuspeciousRegExp": {
            "message": "This line is treated as a regular expression, is that intended?",
            "description": "Warning message to show when a whitelist is parsed as a regular expression whitelist but it is unlikely to be the intention"
        },

        // Filter linter deprecation warnings
        "filterLinterDeprecatedCommentBracket": {
            "message": "Using '[' to denote comment is deprecated, use '!' instead.",
            "description": "Warning message to show when '[' is used to denote comment instead of '!'"
        },
        "filterLinterDeprecatedInlineComment": {
            "message": "Inline comments are deprecated, put the comment on its own line instead.",
            "description": "Warning message to show when inline comment is used"
        },
        // Filter linter special errors
        "filterLinterInternalErrorCosmeticFilterPassedThrough": {
            "message": "A cosmetic filter was not catched by cosmetic filter compiler, please file a bug report.",
            "description": "Error message to show when a cosmetic filter was not catched by cosmetic filter compiler"
        },
        // Cosmetic filtering errors
        "filterLinterRejectedAdguardJSInjection": {
            "message": "Raw JavaSript injection is not accepted due to security concerns.",
            "description": "Error message to show when raw JavaScript injection rule is discarded"
        },
        "filterLinterRejectedStyleInjection": {
            "message": "This CSS injection rule has syntax errors.",
            "description": "Error message to show when a CSS injection rule has syntax errors"
        },
        "filterLinterRejectedCosmeticTooExpensive": {
            "message": "This cosmetic or script snippet rule is too expensive to be applied generically, it must be limited to specific domains.",
            "description": "Error message to show when a cosmetic or script snippet rule must have domains limitation"
        },
        "filterLinterRejectedCosmeticBadIdSelector": {
            "message": "This cosmetic rule contains an invalid id selector.",
            "description": "Error message to show when a cosmetic rule has a bad id selector"
        },
        "filterLinterRejectedCosmeticBadClassSelector": {
            "message": "This cosmetic rule contains an invalid class selector.",
            "description": "Error message to show when a cosmetic rule has a bad class selector"
        },
        "filterLinterRejectedBadCSSSyntax": {
            "message": "This cosmetic rule has CSS syntax errors.",
            "description": "Error message to show when a cosmetic rule has syntax errors"
        },
        "filterLinterRejectedUnrecognizedExtendedSyntaxOperator": {
            "message": "This cosmetic rule contains an unrecognized extended syntax operator.",
            "description": "Error message to show when a cosmetic rule has a bad extended syntax operator"
        },
        "filterLinterRejectedBadProceduralSelector": {
            "message": "This procedural cosmetic rule has syntax errors.",
            "description": "Error message to show when a procedural cosmetic rule has syntax errors"
        },
        // Network filtering errors
        "filterLinterDiscardedLocalhostHostEntry": {
            "message": "This host file entry is discarded because it is localhost declaration.",
            "description": "Error message to show when localhost declaration of a host file is discarded"
        },
        "filterLinterRejectedAdguardElementRemove": {
            "message": "Element remove rules are not yet supported.",
            "description": "Error message to show when an element remove rule is discarded because it is not yet implemented"
        },

        // Tab name of hosts matrix
        "matrixPageName": {
            "message": "Hosts matrix",
            "description": "Hosts matrix tab name"
        },

        // Title of filter viewer
        "filterViewerPageName": {
            "message": "Nano — Filter Viewer",
            "description": "Title of the filter viewer"
        },

        // Based on message of about page
        "aboutBasedOn": {
            "message": "Based on uBlock Origin {{@version}}",
            "description": "English: Based on uBlock Origin {{@version}}"
        }
    };
})();
