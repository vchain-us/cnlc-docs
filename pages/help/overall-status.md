---
title: Home - System Status
---

The *Home* page appears immediately after user login. It displays multiple indicators of system-wide status - Ledgers' status (like total instances and tamper alerts), and system indicators like total transactions posted, resource usage, and pending system messages.

The left-hand navigation panel provides links to every top-level page in the UI.

###### _Topics on this page..._

- [Home Page Indicators](/help/overall-status#home-page-indicators)
- [Navigation](/help/overall-status#navigation)

## Home Page Indicators

<help-image src="/alt_hp_full_dash.png" alt="dashboard" ></help-image>

1. **Tampering Check**

   The CodeNotarty Cloud stack continually monitors entries for signatures of tampering - data or cryptographic inconsistencies.  While *tampering* may indicate the data was intentionally changed, it may also just signal a hardware or software fault.

   <help-image src="/alt_msg_notamper.png" alt="" > </help-image>

   ###### Messages

   _No tampering detected_

   This is the default message, indicating all Ledgers have passed tamper tests.

   _Tampering detected_
   Indicates the the cryptographic proof is invalid and data not consistent. This requires immediate attention.

   Please contact CodeNotary support if you need assistance troubleshooting a tampering message.

   **Messages**  Pending system notification and error messages are indicated here.

   Click the indicator to view unread messages.

   Messages can indicate mission critical events - low disk space, high resource usage, authentication errors, component failures, or pending license expiration. Be sure to monitor messages frequently.

2. **Ledger count**  Shows the current number of Ledgers defined in the system, both active and inactive.

   Click the box icon to go to the *Ledgers overview* page.

   <help-image src="/alt_ldgr_stat.png" alt="Ledger count"></help-image>

4. **+ Add Ledger**  Quick link to create a new Ledger.

   <help-image src="/alt_Add_ledger_btn_sm.png" alt="" > </help-image>

5. **Writes over time**  Indicates the total number of entries written to any Ledger in the last 6 hours.

   <help-image src="/alt_wotb.png" alt="" > </help-image>

6. **Disk usage**  Displays a bar graph of the free and used storage space for both system and Ledger data. You can mouse-over the graphic for details.

   <help-image src="/alt_disk_usage_e.png" alt="disk usage" ></help-image>

## Navigation

The navigation panel on the left side of the screen appears on every page. It provides links to every top-level page in the system, and is available on all pages.

To minimize the navigation panel, click the **<** icon on the bottom edge.

### Main Pages

The top-level pages and subpages are organized as follows:

**Home**
The default page. Displays system status indicators, warnings, and pending message notification.

**Ledgers**
A tabular view of all Ledgers configured in the system. Lets you add a new Ledger, search Ledgers by name, and select individual Ledgers to see stats , generate new API keys, or perform various functions.

**Query Ledger**
A tabular view of previous queries along with a filtering tool to create new queries.

**Audit Report**
A tabular view of listing previously created audit files, downloadable in PDF format.

**Manage**
Tools for managing backups, maintenance, and other functions designed to support typical system admin tasks.

**Users**
A list of current users, and functionality to modify them or create new users.

**Messages**
System messages organized under tabs based on whether they have been read and acknowledged or not.

**Help**
These help pages.

**Developer Section**
Offers links to download SDKs and other interfaces to support access of the CNIL platform from your code.

<ui-prev-next class="mt-1" :prev="{ url: '/introduction', label: 'Understanding the System' }" :next="{ url: '/create-ledger', label: 'Creating a Ledger' }"></ui-prev-next>


