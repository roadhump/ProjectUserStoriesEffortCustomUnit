/*globals tau*/
/*eslint quotes: 0*/

tau
    .mashups
    .addDependency('Underscore')
    .addDependency('jQuery')
    .addDependency('tau/configurator')
    .addDependency('tau/models/board.customize.units/const.entity.types.names')
    .addDependency('tau/models/board.customize.units/const.card.sizes')

    .addMashup(function(_, $, globalConfigurator, types, sizes) {
        'use strict';


        var units = [{
            id: 'project_user_stories_effort',
            classId: 'tau-board-unit_project-user-stories-effort',
            name: 'UserStories Effort',
            types: [
                types.PROJECT
            ],
            sizes: [sizes.XS, sizes.S, sizes.M, sizes.L, sizes.XL, sizes.LIST],
            template: [
                '<span class="tau-board-unit__value"><%= String(Math.round(this.data.effort)) %></span>'
            ],
            sampleData: {
                effort: 30
            },
            model: 'effort:UserStories.Sum(Effort)'
        }];


        function addUnits(configurator) {
            var registry = configurator.getUnitsRegistry();
            _.extend(registry.units, registry.register(units));
        }

        globalConfigurator.getGlobalBus().once('configurator.ready', function(e, configurator) {
            addUnits(configurator);
        });
    });
