Here’s the description formatted for easy copy-pasting:

---

### **Approach and Formulas Used**

#### **Q1: Total number of unique batches in the dataset**
- **Approach:**  
  Count the distinct values in the `Batch Number` column using the `nunique()` function.  
- **Formula:**  
  ```
  Total Unique Batches = data['Batch Number'].nunique()
  ```

---

#### **Q2: Total number of unique batches for Purchase Order #1075875**
- **Approach:**  
  Filter rows where `Purchase order` equals "Purchase Order #1075875" and count distinct `Batch Number` values.  
- **Formula:**  
  ```
  Unique Batches for PO #1075875 = data[data['Purchase order'] == 'Purchase Order #1075875']['Batch Number'].nunique()
  ```

---

#### **Q3: Total number of unique Purchase Orders (POs) with more than 4 unique batches**
- **Approach:**  
  Group the data by `Purchase order`, calculate unique `Batch Number` counts, filter groups with counts > 4, and count the resulting purchase orders.  
- **Formula:**  
  ```
  pos_with_more_than_4_batches = data.groupby('Purchase order')['Batch Number'].nunique().loc[lambda x: x > 4].count()
  ```

---

#### **Q4: Difference in days between the maximum and minimum Production Ready Date (PRD) for Purchase Order #1075875**
- **Approach:**  
  Filter rows for "Purchase Order #1075875", find the maximum and minimum of `Production ready date`, and calculate the difference in days.  
- **Formula:**  
  ```
  prd_diff_po_1075875 = (data[data['Purchase order'] == 'Purchase Order #1075875']['Production ready date'].max() 
                         - data[data['Purchase order'] == 'Purchase Order #1075875']['Production ready date'].min()).days
  ```

---

#### **Q5: Total number of unique Purchase Orders (POs) where the difference between the maximum and minimum PRD is more than 7 days**
- **Approach:**  
  Group data by `Purchase order`, calculate the difference between the maximum and minimum `Production ready date` for each group, filter for differences > 7 days, and count the resulting purchase orders.  
- **Formula:**  
  ```
  pos_with_prd_diff_gt_7 = data.groupby('Purchase order')['Production ready date'].agg(lambda x: (x.max() - x.min()).days).loc[lambda x: x > 7].count()
  ```

---
