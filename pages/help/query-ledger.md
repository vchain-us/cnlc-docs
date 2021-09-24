---
title: Querying a Ledger
---

From the *Query Ledger* page you can search and filter Ledger entries based on a search string, a Signer ID, and a time frame.

###### _Topics on this page..._

- [The Query Ledger Page](/help/query-ledger#the-query-ledger-page)

- [Running a Query](/help/query-ledger#running-a-query)

- [Query Results Tools](/help/query-ledger#query-results-tools)

## The Query Ledger Page

There are three tabs on the *Query Ledger* page. The default tab is *Query*, where the search form is. The *Recent Queries* shows all the most recent queries run by any user. You can optionally save queries. Those are displayed under the *Saved Queries* tab.

<help-image src="/alt_query_recent.jpg" alt="Recent queries" ></help-image>

## Running a Query

Run queries from the *Query* tab on the *Query Ledgers* page. The form at the top of the page lets you select filter parameters, run the query, and save parameters for later reuse.

<help-image src="/alt_query_described.jpg" alt="Running a query" ></help-image>

#### To Run a Query

1. Select the Ledger from the Ledger dropdown.

2. Select the Signer ID from the dropdown. (the blue icon indicates the type, SDK, CI/CD, Postgres)

3. Optionally enter a hash in the dedicated field. This is the look-up key for a given k-v pair Ledger entry.

4. In case the Signer ID is of type 'CI/CD' optionally insert an asset name.

5. In case the Signer ID is of type 'CI/CD' optionally insert an entry type (all, witch attachments or without attachments).

6. Enter the timeframe by clicking the calendar icon, then selecting *relative* or *absolute* time range, and entering the desired dates or durations.

7. From this dialog on the right toggle whether the query should return entries tagged as tampered or not tampered. Click the **Apply** button.

<help-image src="/alt_query_options.jpg" alt="Query options" ></help-image>

7. Click the **Search** button to run the query.

## Query Results Tools

The UI provides additional tools to save, search, and download your query results.

##### Save Query Parameters for Reuse

You can save the values of query fields by clicking the **disk** button.

##### Searching Query Results

A search tool appears after you run a query, unless no Ledger entries were returned.

##### Download Query Results

After running a query, you can click the **download** button to save a csv version of the results to your local hard drive.

<ui-prev-next class="mt-1" :prev="{ url: '/use-ledger', label: 'Using the SDK' }" :next="{ url: '/use-audit-reports', label: 'Generating Audit Reports' }"></ui-prev-next>
