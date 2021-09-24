---
title: Creating a Ledger
---

The very first step in implementing a Ledger is to create it in the browser-based UI.  Part of that process includes generating the secure key to use with the SDK. The key is required to access the Ledger from your code.

###### _Topics on this page..._

- [To Create a Ledger](/help/create-ledger#to-create-a-ledger)

- [Errors Creating a Ledger](/help/create-ledger#errors-creating-a-ledger)

## To Create a Ledger

New Ledgers are created in the web UI from either the _Ledgers_ page or the _Home_ page by clicking the **+ Add Ledger** button.

<help-image src="/alt_ledger_list.jpg" alt="" ></help-image>

Creating a Ledger takes just a few steps - name your Ledger, add optional tags, and generate a Signer ID.

1. **Navigate to the *Ledger Page***  From the left-side navigation bar, select **Ledger** . The _Ledger_ page opens.

2. Click the **+ Add Ledger** button. The *Define Ledger* panel opens.

<help-image src="/alt_create_ledger_step1.jpg" alt="Create ledger step 1" ></help-image>

3. **Enter a unique Ledger name** in the *Ledger name* field.
   Your Ledger name appears in tabular views.  It must be globally unique, and can contain only alphanumeric characters as well as dash and underscore ('-','_').  Note that you have the option to change the Ledger name at any time.

4. **Add Data Labels**  (_optional_) Under *Data Labelling* you can create one or more labels to associate with the Ledger.  Enter a plain-text label and click + or hit the Enter key to add it.

   Click the X on any label to remove it.

   Labels are user-defined tags you can use to help categorize, group or otherwise track identifying aspects of the Ledger. The remain associated with the Ledger as metadata.

   Click the **Next step** button when you're ready to continue. The *Define Signer ID* panel opens.

   *Click the **Previous step** button to return to the Define Ledger* panel.

   <help-image src="/alt_create_ledger_step2.jpg" alt="Create ledger step 2" ></help-image>

5. **Enter a unique name for the Signer ID** in the Signer ID field. The key name must be globally unique, and can contain only alphanumeric characters as well as dash and underscore ('-','_').

   The key name is simply an identifier that allows you to select it in other contexts.

6. Click the **Next step** button when you're ready to continue.

   The *Summary* panel opens.

   ---

   **NOTE**  If you have exceeded the total number of Ledgers allowed by your user license you will see an error when you click the **Next step** button on the *Define Signer ID* panel. (See [Errors Creating a Ledger](#/help/errors-creating-a-ledger) below.)

   ---

   Click the **Previous step** button to return to the *Define Signer ID* panel.

## Errors Creating a Ledger

A red error message may pop up If the system can't validate or process an entry, or if your action exceed limits set by your user license.

Most error messages explain in detail what the problem is.

##### Illegal characters

Most text fields in the UI will accept numbers and letters, as well as dash and underscore. Be sure to remove punctuation and spaces to ensure your text is validated.

##### Duplicate name

All Ledger names and Signer IDs must be unique across the entire system. Rename the Ledger if this happens.

##### License error

<help-image src="/alt_err_license.jpg" alt="Error license" ></help-image>

Codenotary offers a variety of licensing options.

**License Options**

- **Free Edition**: *1 Ledger*
- **Virtual Appliance Edition**: *5 Ledgers*
- **Physical Appliance Edition**: *unlimited Ledgers*

Please contact [sales@codenotary.com](mailto:sales@codenotary.com) for help finding the right license for your needs.

<ui-prev-next class="mt-1" :prev="{ url: '/overall-status', label: 'Home - System Status' }" :next="{ url: '/manage-ledger', label: 'Managing a Ledger' }"></ui-prev-next>
