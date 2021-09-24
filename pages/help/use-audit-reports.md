---
title: Generating Audit Reports
---

Audit reports let you trace time-stamped events in the system for analyzing usage, reporting to leadership, or to support provision of information that may be required by regulators.

###### _Topics on this page..._

- [Generating Audit Reports](/help/use-audit-reports#generating-audit-reports)

- [Reading the Audit Report](/help/use-audit-reports#reading-the-audit-report)

## Generating Audit Reports

A link to the *Audit report* page is available from the main navigation bar. It displays a list of previously generated auto reports, which the platform maintains as internal files.

<help-image src="/alt_audit_report.jpg" alt="Audit report" ></help-image>

When you generate a new audit report, it's added to the tabular view, and you can download it, or open the PDF directly.

#### To Generate a System-wide Audit Report

1. Go to the *Audit report* page.
2. Select how far back, from today, the report should include data for.  You can select time units of hours, days, months, or years from the dropdown. Then select the number of those time units the report should go back to.
3. Click the **Generate report** button in the upper right. The report is created as a file in the system. It will appear at the end of the tabular display after generation.
4. <p class="inline-img">Click the <strong>Download</strong> button <help-image src="/alt_download.jpg" alt=""></help-image> in the far right column to download it as a PDF file.</p>

#### To Generate an Audit Report for a Single Ledger

1. Go to the *Ledgers* page.
2. Select the desired Ledger from the Ledgers display. The Ledger Dashboard appears.
3. Click on the *Audit report* tab. The audit report interface appears. You can select a different Ledger from the dropdown menu in the upper left.
4. Select how far back, from today, the report should include data for.  You can select time units of hours, days, months, or years from the dropdown. Then select the number of those time units the report should go back to.
5. Click the **Generate report** button in the upper right. The report is created as a file in the system. It will appear at the end of the tabular display after generation.
6. <p class="inline-img">Click the <strong>Download</strong> button <help-image src="/alt_download.jpg" alt=""></help-image> in the far right column to download it as a PDF file.</p>

## Reading the Audit Report

Audit reports are created as PDF files. The content includes a title page, a list of audit entries, and a Codenotary Cloud system status report.

##### Title Page

The first page includes a unique id for the report, a sequential *Audit Report* number, the start and end dates for which data is included, and the date the report was generated.

<help-image src="/alt_report_top.jpg" alt="Report top" ></help-image>

##### Log Entries

Below the title page is the list of all logged system events for the designated period.

<help-image src="/alt_report_mid.jpg" alt="Report mid" ></help-image>

##### System Status

The bottom of the report shows selected KPIs and system stats at the time the audit was run.

<help-image src="/alt_report_bottom.jpg" alt="Report bottom" ></help-image>

<ui-prev-next class="mt-1" :prev="{ url: '/query-ledger', label: 'Querying a Ledger' }" :next="{ url: '/user-management', label: 'User management' }"></ui-prev-next>
