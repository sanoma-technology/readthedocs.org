// Documentation build state

module.exports = {
    Build: Build
};

function Build (config) {
    this.config = config;

    // Crappy heuristic, but people change the theme name on us.  So we have to
    // do some duck typing.
    if (this.config['theme'] != 'sphinx_rtd_theme') {
        if ($('div.rst-other-versions').length == 1) {
            this.config['theme'] = 'sphinx_rtd_theme';
        }
    }
}

Build.prototype.is_rtd_theme = function () {
    return (this.config['theme'] == 'sphinx_rtd_theme');
};
