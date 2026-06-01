/* ════════════════════════════════════════════════
   Danger in the Deep Blue — charts.js
   Loads all Vega-Lite JSON specs via vegaEmbed
   and renders custom SVG charts (11, 13).
   ════════════════════════════════════════════════ */

const OPT = { actions: false, renderer: 'svg' };

/* ── Vega-Lite JSON-based charts ── */
vegaEmbed('#chart1',  'js/chart1_deaths_trend.vg.json',            OPT).catch(console.error);
vegaEmbed('#chart2',  'js/chart2_rescues_vs_preventative.vg.json', OPT).catch(console.error);
vegaEmbed('#chart3',  'js/chart3_activity_donut.vg.json',          OPT).catch(console.error);
vegaEmbed('#chart4',  'js/chart4_age_gender_pyramid.vg.json',      OPT).catch(console.error);
vegaEmbed('#chart6',  'js/chart6_birthplace_stacked.vg.json',      OPT).catch(console.error);
vegaEmbed('#chart7',  'js/chart7_state_bubble_map.vg.json',        OPT).catch(console.error);
vegaEmbed('#chart8',  'js/chart8_beach_dot_map.vg.json',           OPT).catch(console.error);
vegaEmbed('#chart9',  'js/chart9_state_heatmap.vg.json',           OPT).catch(console.error);
vegaEmbed('#chart10', 'js/chart10_seasonal_radial.vg.json',        OPT).catch(console.error);
vegaEmbed('#chart12', 'js/chart12_membership_area.vg.json',        OPT).catch(console.error);
vegaEmbed('#chart13', 'js/chart13.vg.json',                        OPT).catch(console.error);
vegaEmbed('#chart14', 'js/chart14_hazard_strip.vg.json',           OPT).catch(console.error);
vegaEmbed('#chart15', 'js/chart15_members_vs_rescues.vg.json',     OPT).catch(console.error);



