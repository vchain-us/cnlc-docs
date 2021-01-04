---
title: Querying a Ledger
---

From the *Query Ledger* page you can search and filter Ledger entries based on a search string, an API key, and a time frame.

###### _Topics on this page..._

- [The Query Ledger Page](/help/query-ledger#the-query-ledger-page)

- [Running a Query](/help/query-ledger#running-a-query)

- [Query Results Tools](/help/query-ledger#query-results-tools)

## The Query Ledger Page

There are three tabs on the *Query Ledger* page. The default tab is *Query*, where the search form is. The *Recent Queries* shows all the most recent queries run by any user. You can optionally save queries. Those are displayed under the *Saved Queries* tab.

<v-img src="/alt_query_ldgr_main.png" alt="" ></v-img>

## Running a Query

Run queries from the *Query* tab on the *Query Ledgers* page. The form at the top of the page lets you select filter parameters, run the query, and save parameters for later reuse.

<v-img src="/alt_query_ldgr_wgt_annot.png" alt="" ></v-img>

#### To Run a Query

1. Select the Ledger from the Ledger dropdown.

2. Select the API key from the dropdown. (the blue icon indicates the type, SDK, CI/CD, Postgres)

3. Enter a key or key prefix in the key field. This is the look-up key for a given k-v pair Ledger entry.

4. Enter the timeframe by clicking the calendar icon, then selecting *relative* or *absolute* time range, and entering the desired dates or durations.

5. Select the (maximum) number of rows the query should return.

6. From this same dialog you can also toggle whether the query should return entries tagged as tampered or not tampered. Click the **Apply** button.

   <v-img src="/alt_query_entryfilt_dlg.png" alt="" ></v-img>

7.
   Click the **Filter** button to run the query.

## Query Results Tools

The UI provides additional tools to save, search, and download your query results.

##### Save Query Parameters for Reuse

You can save the values of query fields by clicking the **disk** button.

##### Searching Query Results

A search tool appears after you run a query, unless no Ledger entries were returned.

##### Download Query Results

After running a query, you can click the **download** button to save a csv version of the results to your local hard drive.

<prev-next class="_margin-top-1" :prev="{ url: '/use-ledger', label: 'Using the SDK' }" :next="{ url: '/use-audit-reports', label: 'Generating Audit Reports' }"></prev-next>
