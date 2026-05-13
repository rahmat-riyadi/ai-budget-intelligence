import React, { useEffect, useState } from 'react';
import { Input, Button, ConfigProvider, Card, Flex, Table, Typography } from 'antd';
import { Icon } from '@iconify/react';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';
import { useMutation } from '@tanstack/react-query';
import { chatService } from '../../services/chat.service';
import Markdown from 'react-markdown'
import Plot from 'react-plotly.js';
import PlotlyChart from '../../components/common/PlotlyChart';
import DataFrameBlock from '../../components/common/DataFrameBlock';



export default function ChatPage() {

  const [messages, setMessages] = useState([
    // {
    //   "id": "e45e3152-201a-4024-bff2-e270f8141e19",
    //   "role": "user",
    //   "message": "berikan 5 data anggaran teratas"
    // },
    // {
    //   "id": "bd527fe9-b638-415b-8616-0f458725c645",
    //   "role": "assistant",
    //   "blocks": [
    //     {
    //       "id": "vanna-status-bar",
    //       "type": "status_bar_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:53.779811",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "status": "working",
    //         "message": "Processing your request...",
    //         "detail": "Analyzing query"
    //       }
    //     },
    //     {
    //       "id": "vanna-task-tracker",
    //       "type": "task_tracker_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:53.780343",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "operation": "add_task",
    //         "task": {
    //           "id": "0c416dc9-c072-43b2-96aa-63cbff46ce8a",
    //           "title": "Load conversation context",
    //           "description": "Reading message history and user context",
    //           "status": "pending",
    //           "progress": null,
    //           "created_at": "2026-05-13T08:39:53.780308",
    //           "completed_at": null,
    //           "metadata": {}
    //         },
    //         "task_id": null,
    //         "status": null,
    //         "progress": null,
    //         "detail": null
    //       }
    //     },
    //     {
    //       "id": "vanna-task-tracker",
    //       "type": "task_tracker_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:53.782838",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "operation": "update_task",
    //         "task": null,
    //         "task_id": "0c416dc9-c072-43b2-96aa-63cbff46ce8a",
    //         "status": "completed",
    //         "progress": null,
    //         "detail": null
    //       }
    //     },
    //     {
    //       "id": "vanna-task-tracker",
    //       "type": "task_tracker_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:56.898621",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "operation": "add_task",
    //         "task": {
    //           "id": "68b86491-7f8b-422a-9177-53d16704d22c",
    //           "title": "Execute search_saved_correct_tool_uses",
    //           "description": "Running tool with provided arguments",
    //           "status": "in_progress",
    //           "progress": null,
    //           "created_at": "2026-05-13T08:39:56.898539",
    //           "completed_at": null,
    //           "metadata": {}
    //         },
    //         "task_id": null,
    //         "status": null,
    //         "progress": null,
    //         "detail": null
    //       }
    //     },
    //     {
    //       "id": "vanna-task-tracker",
    //       "type": "task_tracker_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:56.899793",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "operation": "update_task",
    //         "task": null,
    //         "task_id": "68b86491-7f8b-422a-9177-53d16704d22c",
    //         "status": "completed",
    //         "progress": null,
    //         "detail": "Tool completed successfully"
    //       }
    //     },
    //     {
    //       "id": "vanna-status-bar",
    //       "type": "status_bar_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:56.899710",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "status": "idle",
    //         "message": "No similar patterns found",
    //         "detail": "Searched agent memory"
    //       }
    //     },
    //     {
    //       "id": "vanna-task-tracker",
    //       "type": "task_tracker_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:58.141180",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "operation": "add_task",
    //         "task": {
    //           "id": "7c3515d5-76a5-4a87-ab05-b1affcf2e380",
    //           "title": "Execute run_sql",
    //           "description": "Running tool with provided arguments",
    //           "status": "in_progress",
    //           "progress": null,
    //           "created_at": "2026-05-13T08:39:58.141121",
    //           "completed_at": null,
    //           "metadata": {}
    //         },
    //         "task_id": null,
    //         "status": null,
    //         "progress": null,
    //         "detail": null
    //       }
    //     },
    //     {
    //       "id": "vanna-task-tracker",
    //       "type": "task_tracker_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:58.195967",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "operation": "update_task",
    //         "task": null,
    //         "task_id": "7c3515d5-76a5-4a87-ab05-b1affcf2e380",
    //         "status": "completed",
    //         "progress": null,
    //         "detail": "Tool completed successfully"
    //       }
    //     },
    //     {
    //       "id": "73bb983c-e5ff-4c9b-8461-98fda2562716",
    //       "type": "dataframe",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:58.195766",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "data": [
    //           {
    //             "tahun": 2026,
    //             "kode_skpd": "1.01.0.00.0.00.01.0000",
    //             "nama_skpd": "1.01.0.00.0.00.01.0000 DINAS PENDIDIKAN",
    //             "kode_bidang": "1.01",
    //             "nama_bidang": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN",
    //             "kode_program": "1.01.01",
    //             "nama_program": "1.01.01.PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH PROVINSI",
    //             "kode_kegiatan": "1.1.01",
    //             "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah",
    //             "kode_subkegiatan": "1.01.01.1.01.0003",
    //             "nama_subkegiatan": "X.XX.01.1.01.0003 Koordinasi dan Penyusunan Dokumen Perubahan RKA-SKPD",
    //             "kode_rek_utama": "5",
    //             "nama_rek_utama": "BELANJA DAERAH",
    //             "kode_rek_kelompok": "5.1",
    //             "nama_rek_kelompok": "BELANJA OPERASI",
    //             "kode_rek_jenis": "5.1.02",
    //             "nama_rek_jenis": "Belanja Barang dan Jasa",
    //             "kode_rek_objek": "5.1.02.01",
    //             "nama_rek_objek": "Belanja Barang",
    //             "kode_rek_rincian": "5.1.02.01.001",
    //             "nama_rek_rincian": "Belanja Barang Pakai Habis",
    //             "kode_rek_subrincian": "5.1.02.01.001.00024",
    //             "nama_rek_subrincian": "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor",
    //             "apbd": 3500000,
    //             "realisasi": 0,
    //             "real_key": 0,
    //             "sisa_dana": 3500000,
    //             "id": 2
    //           },
    //           {
    //             "tahun": 2026,
    //             "kode_skpd": "1.01.0.00.0.00.01.0000",
    //             "nama_skpd": "1.01.0.00.0.00.01.0000 DINAS PENDIDIKAN",
    //             "kode_bidang": "1.01",
    //             "nama_bidang": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN",
    //             "kode_program": "1.01.01",
    //             "nama_program": "1.01.01.PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH PROVINSI",
    //             "kode_kegiatan": "1.1.01",
    //             "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah",
    //             "kode_subkegiatan": "1.01.01.1.01.0004",
    //             "nama_subkegiatan": "X.XX.01.1.01.0004 Koordinasi dan Penyusunan DPA-SKPD",
    //             "kode_rek_utama": "5",
    //             "nama_rek_utama": "BELANJA DAERAH",
    //             "kode_rek_kelompok": "5.1",
    //             "nama_rek_kelompok": "BELANJA OPERASI",
    //             "kode_rek_jenis": "5.1.02",
    //             "nama_rek_jenis": "Belanja Barang dan Jasa",
    //             "kode_rek_objek": "5.1.02.01",
    //             "nama_rek_objek": "Belanja Barang",
    //             "kode_rek_rincian": "5.1.02.01.001",
    //             "nama_rek_rincian": "Belanja Barang Pakai Habis",
    //             "kode_rek_subrincian": "5.1.02.01.001.00024",
    //             "nama_rek_subrincian": "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor",
    //             "apbd": 3500000,
    //             "realisasi": 0,
    //             "real_key": 0,
    //             "sisa_dana": 3500000,
    //             "id": 3
    //           },
    //           {
    //             "tahun": 2026,
    //             "kode_skpd": "1.01.0.00.0.00.01.0000",
    //             "nama_skpd": "1.01.0.00.0.00.01.0000 DINAS PENDIDIKAN",
    //             "kode_bidang": "1.01",
    //             "nama_bidang": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN",
    //             "kode_program": "1.01.01",
    //             "nama_program": "1.01.01.PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH PROVINSI",
    //             "kode_kegiatan": "1.1.01",
    //             "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah",
    //             "kode_subkegiatan": "1.01.01.1.01.0005",
    //             "nama_subkegiatan": "X.XX.01.1.01.0005 Koordinasi dan Penyusunan Perubahan DPA- SKPD",
    //             "kode_rek_utama": "5",
    //             "nama_rek_utama": "BELANJA DAERAH",
    //             "kode_rek_kelompok": "5.1",
    //             "nama_rek_kelompok": "BELANJA OPERASI",
    //             "kode_rek_jenis": "5.1.02",
    //             "nama_rek_jenis": "Belanja Barang dan Jasa",
    //             "kode_rek_objek": "5.1.02.01",
    //             "nama_rek_objek": "Belanja Barang",
    //             "kode_rek_rincian": "5.1.02.01.001",
    //             "nama_rek_rincian": "Belanja Barang Pakai Habis",
    //             "kode_rek_subrincian": "5.1.02.01.001.00024",
    //             "nama_rek_subrincian": "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor",
    //             "apbd": 3500000,
    //             "realisasi": 0,
    //             "real_key": 0,
    //             "sisa_dana": 3500000,
    //             "id": 4
    //           },
    //           {
    //             "tahun": 2026,
    //             "kode_skpd": "1.01.0.00.0.00.01.0000",
    //             "nama_skpd": "1.01.0.00.0.00.01.0000 DINAS PENDIDIKAN",
    //             "kode_bidang": "1.01",
    //             "nama_bidang": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN",
    //             "kode_program": "1.01.01",
    //             "nama_program": "1.01.01.PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH PROVINSI",
    //             "kode_kegiatan": "1.1.01",
    //             "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah",
    //             "kode_subkegiatan": "1.01.01.1.01.0009",
    //             "nama_subkegiatan": "X.XX.01.1.01.0009 Pelaksanaan Forum Perangkat Daerah Berdasarkan Bidang Urusan yang Diampu dalam Rangka Penyusunan Dokumen Perencanaan Perangkat Daerah",
    //             "kode_rek_utama": "5",
    //             "nama_rek_utama": "BELANJA DAERAH",
    //             "kode_rek_kelompok": "5.1",
    //             "nama_rek_kelompok": "BELANJA OPERASI",
    //             "kode_rek_jenis": "5.1.02",
    //             "nama_rek_jenis": "Belanja Barang dan Jasa",
    //             "kode_rek_objek": "5.1.02.02",
    //             "nama_rek_objek": "Belanja Jasa",
    //             "kode_rek_rincian": "5.1.02.02.001",
    //             "nama_rek_rincian": "Belanja Jasa Kantor",
    //             "kode_rek_subrincian": "5.1.02.02.001.00047",
    //             "nama_rek_subrincian": "Belanja Jasa Penyelenggaraan Acara",
    //             "apbd": 200000000,
    //             "realisasi": 0,
    //             "real_key": 0,
    //             "sisa_dana": 200000000,
    //             "id": 5
    //           },
    //           {
    //             "tahun": 2026,
    //             "kode_skpd": "1.01.0.00.0.00.01.0000",
    //             "nama_skpd": "1.01.0.00.0.00.01.0000 DINAS PENDIDIKAN",
    //             "kode_bidang": "1.01",
    //             "nama_bidang": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN",
    //             "kode_program": "1.01.01",
    //             "nama_program": "1.01.01.PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH PROVINSI",
    //             "kode_kegiatan": "1.1.01",
    //             "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah",
    //             "kode_subkegiatan": "1.01.01.1.01.0002",
    //             "nama_subkegiatan": "X.XX.01.1.01.0002 Koordinasi dan Penyusunan Dokumen RKA- SKPD",
    //             "kode_rek_utama": "5",
    //             "nama_rek_utama": "BELANJA DAERAH",
    //             "kode_rek_kelompok": "5.1",
    //             "nama_rek_kelompok": "BELANJA OPERASI",
    //             "kode_rek_jenis": "5.1.02",
    //             "nama_rek_jenis": "Belanja Barang dan Jasa",
    //             "kode_rek_objek": "5.1.02.01",
    //             "nama_rek_objek": "Belanja Barang",
    //             "kode_rek_rincian": "5.1.02.01.001",
    //             "nama_rek_rincian": "Belanja Barang Pakai Habis",
    //             "kode_rek_subrincian": "5.1.02.01.001.00024",
    //             "nama_rek_subrincian": "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor",
    //             "apbd": 3571400,
    //             "realisasi": 0,
    //             "real_key": 0,
    //             "sisa_dana": 3571400,
    //             "id": 1
    //           }
    //         ],
    //         "columns": [
    //           "tahun",
    //           "kode_skpd",
    //           "nama_skpd",
    //           "kode_bidang",
    //           "nama_bidang",
    //           "kode_program",
    //           "nama_program",
    //           "kode_kegiatan",
    //           "nama_kegiatan",
    //           "kode_subkegiatan",
    //           "nama_subkegiatan",
    //           "kode_rek_utama",
    //           "nama_rek_utama",
    //           "kode_rek_kelompok",
    //           "nama_rek_kelompok",
    //           "kode_rek_jenis",
    //           "nama_rek_jenis",
    //           "kode_rek_objek",
    //           "nama_rek_objek",
    //           "kode_rek_rincian",
    //           "nama_rek_rincian",
    //           "kode_rek_subrincian",
    //           "nama_rek_subrincian",
    //           "apbd",
    //           "realisasi",
    //           "real_key",
    //           "sisa_dana",
    //           "id"
    //         ],
    //         "title": "Query Results",
    //         "description": "SQL query returned 5 rows with 28 columns",
    //         "row_count": 5,
    //         "column_count": 28,
    //         "max_rows_displayed": 100,
    //         "searchable": true,
    //         "sortable": true,
    //         "filterable": true,
    //         "exportable": true,
    //         "striped": true,
    //         "bordered": true,
    //         "compact": false,
    //         "paginated": true,
    //         "page_size": 25,
    //         "column_types": {}
    //       }
    //     },
    //     {
    //       "id": "vanna-status-bar",
    //       "type": "status_bar_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:59.879155",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "status": "idle",
    //         "message": "Response complete",
    //         "detail": "Ready for next message"
    //       }
    //     },
    //     {
    //       "id": "vanna-chat-input",
    //       "type": "chat_input_update",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:59.879396",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "placeholder": "Ask a follow-up question...",
    //         "disabled": false,
    //         "value": null,
    //         "focus": null
    //       }
    //     },
    //     {
    //       "id": "9b85ae95-2542-43c2-9bf1-f452fdd1fae9",
    //       "type": "chart",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T12:52:28.004309",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "data": [
    //           {
    //             "hovertemplate": "nama_skpd=%{x}<br>total_anggaran=%{y}<extra></extra>",
    //             "legendgroup": "",
    //             "marker": {
    //               "color": "#fe5d26",
    //               "pattern": {
    //                 "shape": ""
    //               }
    //             },
    //             "name": "",
    //             "orientation": "v",
    //             "showlegend": false,
    //             "textposition": "auto",
    //             "x": [
    //               "DINAS PENDIDIKAN",
    //               "BADAN KEUANGAN DAN ASET DAERAH"
    //             ],
    //             "xaxis": "x",
    //             "y": [
    //               3314227363956,
    //               1441849845165
    //             ],
    //             "yaxis": "y",
    //             "type": "bar"
    //           }
    //         ],
    //         "layout": {
    //           "template": {
    //             "data": {
    //               "histogram2dcontour": [
    //                 {
    //                   "type": "histogram2dcontour",
    //                   "colorbar": {
    //                     "outlinewidth": 0,
    //                     "ticks": ""
    //                   },
    //                   "colorscale": [
    //                     [
    //                       0.0,
    //                       "#0d0887"
    //                     ],
    //                     [
    //                       0.1111111111111111,
    //                       "#46039f"
    //                     ],
    //                     [
    //                       0.2222222222222222,
    //                       "#7201a8"
    //                     ],
    //                     [
    //                       0.3333333333333333,
    //                       "#9c179e"
    //                     ],
    //                     [
    //                       0.4444444444444444,
    //                       "#bd3786"
    //                     ],
    //                     [
    //                       0.5555555555555556,
    //                       "#d8576b"
    //                     ],
    //                     [
    //                       0.6666666666666666,
    //                       "#ed7953"
    //                     ],
    //                     [
    //                       0.7777777777777778,
    //                       "#fb9f3a"
    //                     ],
    //                     [
    //                       0.8888888888888888,
    //                       "#fdca26"
    //                     ],
    //                     [
    //                       1.0,
    //                       "#f0f921"
    //                     ]
    //                   ]
    //                 }
    //               ],
    //               "choropleth": [
    //                 {
    //                   "type": "choropleth",
    //                   "colorbar": {
    //                     "outlinewidth": 0,
    //                     "ticks": ""
    //                   }
    //                 }
    //               ],
    //               "histogram2d": [
    //                 {
    //                   "type": "histogram2d",
    //                   "colorbar": {
    //                     "outlinewidth": 0,
    //                     "ticks": ""
    //                   },
    //                   "colorscale": [
    //                     [
    //                       0.0,
    //                       "#0d0887"
    //                     ],
    //                     [
    //                       0.1111111111111111,
    //                       "#46039f"
    //                     ],
    //                     [
    //                       0.2222222222222222,
    //                       "#7201a8"
    //                     ],
    //                     [
    //                       0.3333333333333333,
    //                       "#9c179e"
    //                     ],
    //                     [
    //                       0.4444444444444444,
    //                       "#bd3786"
    //                     ],
    //                     [
    //                       0.5555555555555556,
    //                       "#d8576b"
    //                     ],
    //                     [
    //                       0.6666666666666666,
    //                       "#ed7953"
    //                     ],
    //                     [
    //                       0.7777777777777778,
    //                       "#fb9f3a"
    //                     ],
    //                     [
    //                       0.8888888888888888,
    //                       "#fdca26"
    //                     ],
    //                     [
    //                       1.0,
    //                       "#f0f921"
    //                     ]
    //                   ]
    //                 }
    //               ],
    //               "heatmap": [
    //                 {
    //                   "type": "heatmap",
    //                   "colorbar": {
    //                     "outlinewidth": 0,
    //                     "ticks": ""
    //                   },
    //                   "colorscale": [
    //                     [
    //                       0.0,
    //                       "#0d0887"
    //                     ],
    //                     [
    //                       0.1111111111111111,
    //                       "#46039f"
    //                     ],
    //                     [
    //                       0.2222222222222222,
    //                       "#7201a8"
    //                     ],
    //                     [
    //                       0.3333333333333333,
    //                       "#9c179e"
    //                     ],
    //                     [
    //                       0.4444444444444444,
    //                       "#bd3786"
    //                     ],
    //                     [
    //                       0.5555555555555556,
    //                       "#d8576b"
    //                     ],
    //                     [
    //                       0.6666666666666666,
    //                       "#ed7953"
    //                     ],
    //                     [
    //                       0.7777777777777778,
    //                       "#fb9f3a"
    //                     ],
    //                     [
    //                       0.8888888888888888,
    //                       "#fdca26"
    //                     ],
    //                     [
    //                       1.0,
    //                       "#f0f921"
    //                     ]
    //                   ]
    //                 }
    //               ],
    //               "contourcarpet": [
    //                 {
    //                   "type": "contourcarpet",
    //                   "colorbar": {
    //                     "outlinewidth": 0,
    //                     "ticks": ""
    //                   }
    //                 }
    //               ],
    //               "contour": [
    //                 {
    //                   "type": "contour",
    //                   "colorbar": {
    //                     "outlinewidth": 0,
    //                     "ticks": ""
    //                   },
    //                   "colorscale": [
    //                     [
    //                       0.0,
    //                       "#0d0887"
    //                     ],
    //                     [
    //                       0.1111111111111111,
    //                       "#46039f"
    //                     ],
    //                     [
    //                       0.2222222222222222,
    //                       "#7201a8"
    //                     ],
    //                     [
    //                       0.3333333333333333,
    //                       "#9c179e"
    //                     ],
    //                     [
    //                       0.4444444444444444,
    //                       "#bd3786"
    //                     ],
    //                     [
    //                       0.5555555555555556,
    //                       "#d8576b"
    //                     ],
    //                     [
    //                       0.6666666666666666,
    //                       "#ed7953"
    //                     ],
    //                     [
    //                       0.7777777777777778,
    //                       "#fb9f3a"
    //                     ],
    //                     [
    //                       0.8888888888888888,
    //                       "#fdca26"
    //                     ],
    //                     [
    //                       1.0,
    //                       "#f0f921"
    //                     ]
    //                   ]
    //                 }
    //               ],
    //               "surface": [
    //                 {
    //                   "type": "surface",
    //                   "colorbar": {
    //                     "outlinewidth": 0,
    //                     "ticks": ""
    //                   },
    //                   "colorscale": [
    //                     [
    //                       0.0,
    //                       "#0d0887"
    //                     ],
    //                     [
    //                       0.1111111111111111,
    //                       "#46039f"
    //                     ],
    //                     [
    //                       0.2222222222222222,
    //                       "#7201a8"
    //                     ],
    //                     [
    //                       0.3333333333333333,
    //                       "#9c179e"
    //                     ],
    //                     [
    //                       0.4444444444444444,
    //                       "#bd3786"
    //                     ],
    //                     [
    //                       0.5555555555555556,
    //                       "#d8576b"
    //                     ],
    //                     [
    //                       0.6666666666666666,
    //                       "#ed7953"
    //                     ],
    //                     [
    //                       0.7777777777777778,
    //                       "#fb9f3a"
    //                     ],
    //                     [
    //                       0.8888888888888888,
    //                       "#fdca26"
    //                     ],
    //                     [
    //                       1.0,
    //                       "#f0f921"
    //                     ]
    //                   ]
    //                 }
    //               ],
    //               "mesh3d": [
    //                 {
    //                   "type": "mesh3d",
    //                   "colorbar": {
    //                     "outlinewidth": 0,
    //                     "ticks": ""
    //                   }
    //                 }
    //               ],
    //               "scatter": [
    //                 {
    //                   "fillpattern": {
    //                     "fillmode": "overlay",
    //                     "size": 10,
    //                     "solidity": 0.2
    //                   },
    //                   "type": "scatter"
    //                 }
    //               ],
    //               "parcoords": [
    //                 {
    //                   "type": "parcoords",
    //                   "line": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "scatterpolargl": [
    //                 {
    //                   "type": "scatterpolargl",
    //                   "marker": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "bar": [
    //                 {
    //                   "error_x": {
    //                     "color": "#2a3f5f"
    //                   },
    //                   "error_y": {
    //                     "color": "#2a3f5f"
    //                   },
    //                   "marker": {
    //                     "line": {
    //                       "color": "#E5ECF6",
    //                       "width": 0.5
    //                     },
    //                     "pattern": {
    //                       "fillmode": "overlay",
    //                       "size": 10,
    //                       "solidity": 0.2
    //                     }
    //                   },
    //                   "type": "bar"
    //                 }
    //               ],
    //               "scattergeo": [
    //                 {
    //                   "type": "scattergeo",
    //                   "marker": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "scatterpolar": [
    //                 {
    //                   "type": "scatterpolar",
    //                   "marker": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "histogram": [
    //                 {
    //                   "marker": {
    //                     "pattern": {
    //                       "fillmode": "overlay",
    //                       "size": 10,
    //                       "solidity": 0.2
    //                     }
    //                   },
    //                   "type": "histogram"
    //                 }
    //               ],
    //               "scattergl": [
    //                 {
    //                   "type": "scattergl",
    //                   "marker": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "scatter3d": [
    //                 {
    //                   "type": "scatter3d",
    //                   "line": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   },
    //                   "marker": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "scattermap": [
    //                 {
    //                   "type": "scattermap",
    //                   "marker": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "scattermapbox": [
    //                 {
    //                   "type": "scattermapbox",
    //                   "marker": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "scatterternary": [
    //                 {
    //                   "type": "scatterternary",
    //                   "marker": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "scattercarpet": [
    //                 {
    //                   "type": "scattercarpet",
    //                   "marker": {
    //                     "colorbar": {
    //                       "outlinewidth": 0,
    //                       "ticks": ""
    //                     }
    //                   }
    //                 }
    //               ],
    //               "carpet": [
    //                 {
    //                   "aaxis": {
    //                     "endlinecolor": "#2a3f5f",
    //                     "gridcolor": "white",
    //                     "linecolor": "white",
    //                     "minorgridcolor": "white",
    //                     "startlinecolor": "#2a3f5f"
    //                   },
    //                   "baxis": {
    //                     "endlinecolor": "#2a3f5f",
    //                     "gridcolor": "white",
    //                     "linecolor": "white",
    //                     "minorgridcolor": "white",
    //                     "startlinecolor": "#2a3f5f"
    //                   },
    //                   "type": "carpet"
    //                 }
    //               ],
    //               "table": [
    //                 {
    //                   "cells": {
    //                     "fill": {
    //                       "color": "#EBF0F8"
    //                     },
    //                     "line": {
    //                       "color": "white"
    //                     }
    //                   },
    //                   "header": {
    //                     "fill": {
    //                       "color": "#C8D4E3"
    //                     },
    //                     "line": {
    //                       "color": "white"
    //                     }
    //                   },
    //                   "type": "table"
    //                 }
    //               ],
    //               "barpolar": [
    //                 {
    //                   "marker": {
    //                     "line": {
    //                       "color": "#E5ECF6",
    //                       "width": 0.5
    //                     },
    //                     "pattern": {
    //                       "fillmode": "overlay",
    //                       "size": 10,
    //                       "solidity": 0.2
    //                     }
    //                   },
    //                   "type": "barpolar"
    //                 }
    //               ],
    //               "pie": [
    //                 {
    //                   "automargin": true,
    //                   "type": "pie"
    //                 }
    //               ]
    //             },
    //             "layout": {
    //               "autotypenumbers": "strict",
    //               "colorway": [
    //                 "#636efa",
    //                 "#EF553B",
    //                 "#00cc96",
    //                 "#ab63fa",
    //                 "#FFA15A",
    //                 "#19d3f3",
    //                 "#FF6692",
    //                 "#B6E880",
    //                 "#FF97FF",
    //                 "#FECB52"
    //               ],
    //               "font": {
    //                 "color": "#2a3f5f"
    //               },
    //               "hovermode": "closest",
    //               "hoverlabel": {
    //                 "align": "left"
    //               },
    //               "paper_bgcolor": "white",
    //               "plot_bgcolor": "#E5ECF6",
    //               "polar": {
    //                 "bgcolor": "#E5ECF6",
    //                 "angularaxis": {
    //                   "gridcolor": "white",
    //                   "linecolor": "white",
    //                   "ticks": ""
    //                 },
    //                 "radialaxis": {
    //                   "gridcolor": "white",
    //                   "linecolor": "white",
    //                   "ticks": ""
    //                 }
    //               },
    //               "ternary": {
    //                 "bgcolor": "#E5ECF6",
    //                 "aaxis": {
    //                   "gridcolor": "white",
    //                   "linecolor": "white",
    //                   "ticks": ""
    //                 },
    //                 "baxis": {
    //                   "gridcolor": "white",
    //                   "linecolor": "white",
    //                   "ticks": ""
    //                 },
    //                 "caxis": {
    //                   "gridcolor": "white",
    //                   "linecolor": "white",
    //                   "ticks": ""
    //                 }
    //               },
    //               "coloraxis": {
    //                 "colorbar": {
    //                   "outlinewidth": 0,
    //                   "ticks": ""
    //                 }
    //               },
    //               "colorscale": {
    //                 "sequential": [
    //                   [
    //                     0.0,
    //                     "#0d0887"
    //                   ],
    //                   [
    //                     0.1111111111111111,
    //                     "#46039f"
    //                   ],
    //                   [
    //                     0.2222222222222222,
    //                     "#7201a8"
    //                   ],
    //                   [
    //                     0.3333333333333333,
    //                     "#9c179e"
    //                   ],
    //                   [
    //                     0.4444444444444444,
    //                     "#bd3786"
    //                   ],
    //                   [
    //                     0.5555555555555556,
    //                     "#d8576b"
    //                   ],
    //                   [
    //                     0.6666666666666666,
    //                     "#ed7953"
    //                   ],
    //                   [
    //                     0.7777777777777778,
    //                     "#fb9f3a"
    //                   ],
    //                   [
    //                     0.8888888888888888,
    //                     "#fdca26"
    //                   ],
    //                   [
    //                     1.0,
    //                     "#f0f921"
    //                   ]
    //                 ],
    //                 "sequentialminus": [
    //                   [
    //                     0.0,
    //                     "#0d0887"
    //                   ],
    //                   [
    //                     0.1111111111111111,
    //                     "#46039f"
    //                   ],
    //                   [
    //                     0.2222222222222222,
    //                     "#7201a8"
    //                   ],
    //                   [
    //                     0.3333333333333333,
    //                     "#9c179e"
    //                   ],
    //                   [
    //                     0.4444444444444444,
    //                     "#bd3786"
    //                   ],
    //                   [
    //                     0.5555555555555556,
    //                     "#d8576b"
    //                   ],
    //                   [
    //                     0.6666666666666666,
    //                     "#ed7953"
    //                   ],
    //                   [
    //                     0.7777777777777778,
    //                     "#fb9f3a"
    //                   ],
    //                   [
    //                     0.8888888888888888,
    //                     "#fdca26"
    //                   ],
    //                   [
    //                     1.0,
    //                     "#f0f921"
    //                   ]
    //                 ],
    //                 "diverging": [
    //                   [
    //                     0,
    //                     "#8e0152"
    //                   ],
    //                   [
    //                     0.1,
    //                     "#c51b7d"
    //                   ],
    //                   [
    //                     0.2,
    //                     "#de77ae"
    //                   ],
    //                   [
    //                     0.3,
    //                     "#f1b6da"
    //                   ],
    //                   [
    //                     0.4,
    //                     "#fde0ef"
    //                   ],
    //                   [
    //                     0.5,
    //                     "#f7f7f7"
    //                   ],
    //                   [
    //                     0.6,
    //                     "#e6f5d0"
    //                   ],
    //                   [
    //                     0.7,
    //                     "#b8e186"
    //                   ],
    //                   [
    //                     0.8,
    //                     "#7fbc41"
    //                   ],
    //                   [
    //                     0.9,
    //                     "#4d9221"
    //                   ],
    //                   [
    //                     1,
    //                     "#276419"
    //                   ]
    //                 ]
    //               },
    //               "xaxis": {
    //                 "gridcolor": "white",
    //                 "linecolor": "white",
    //                 "ticks": "",
    //                 "title": {
    //                   "standoff": 15
    //                 },
    //                 "zerolinecolor": "white",
    //                 "automargin": true,
    //                 "zerolinewidth": 2
    //               },
    //               "yaxis": {
    //                 "gridcolor": "white",
    //                 "linecolor": "white",
    //                 "ticks": "",
    //                 "title": {
    //                   "standoff": 15
    //                 },
    //                 "zerolinecolor": "white",
    //                 "automargin": true,
    //                 "zerolinewidth": 2
    //               },
    //               "scene": {
    //                 "xaxis": {
    //                   "backgroundcolor": "#E5ECF6",
    //                   "gridcolor": "white",
    //                   "linecolor": "white",
    //                   "showbackground": true,
    //                   "ticks": "",
    //                   "zerolinecolor": "white",
    //                   "gridwidth": 2
    //                 },
    //                 "yaxis": {
    //                   "backgroundcolor": "#E5ECF6",
    //                   "gridcolor": "white",
    //                   "linecolor": "white",
    //                   "showbackground": true,
    //                   "ticks": "",
    //                   "zerolinecolor": "white",
    //                   "gridwidth": 2
    //                 },
    //                 "zaxis": {
    //                   "backgroundcolor": "#E5ECF6",
    //                   "gridcolor": "white",
    //                   "linecolor": "white",
    //                   "showbackground": true,
    //                   "ticks": "",
    //                   "zerolinecolor": "white",
    //                   "gridwidth": 2
    //                 }
    //               },
    //               "shapedefaults": {
    //                 "line": {
    //                   "color": "#2a3f5f"
    //                 }
    //               },
    //               "annotationdefaults": {
    //                 "arrowcolor": "#2a3f5f",
    //                 "arrowhead": 0,
    //                 "arrowwidth": 1
    //               },
    //               "geo": {
    //                 "bgcolor": "white",
    //                 "landcolor": "#E5ECF6",
    //                 "subunitcolor": "white",
    //                 "showland": true,
    //                 "showlakes": true,
    //                 "lakecolor": "white"
    //               },
    //               "title": {
    //                 "x": 0.05
    //               },
    //               "mapbox": {
    //                 "style": "light"
    //               }
    //             }
    //           },
    //           "xaxis": {
    //             "anchor": "y",
    //             "domain": [
    //               0.0,
    //               1.0
    //             ],
    //             "title": {
    //               "text": "nama_skpd"
    //             }
    //           },
    //           "yaxis": {
    //             "anchor": "x",
    //             "domain": [
    //               0.0,
    //               1.0
    //             ],
    //             "title": {
    //               "text": "total_anggaran"
    //             }
    //           },
    //           "legend": {
    //             "tracegroupgap": 0
    //           },
    //           "title": {
    //             "text": "Perbandingan 2 SKPD dengan Anggaran Tertinggi"
    //           },
    //           "barmode": "relative",
    //           "font": {
    //             "color": "#023d60"
    //           },
    //           "autosize": true,
    //           "colorway": [
    //             "#15a8a8",
    //             "#fe5d26",
    //             "#bf1363",
    //             "#023d60"
    //           ]
    //         },
    //         "chart_type": "plotly",
    //         "title": "Perbandingan 2 SKPD dengan Anggaran Tertinggi",
    //         "width": null,
    //         "height": null,
    //         "config": {
    //           "data_shape": {
    //             "rows": 2,
    //             "columns": 2
    //           },
    //           "source_file": "query_results_6fda71eb.csv"
    //         }
    //       }
    //     },
    //     {
    //       "id": "67fd92fb-6f87-475d-ae62-ec604a308b9a",
    //       "type": "text",
    //       "lifecycle": "create",
    //       "children": [],
    //       "timestamp": "2026-05-13T08:39:59.879630",
    //       "visible": true,
    //       "interactive": false,
    //       "data": {
    //         "content": "Berikut **5 data anggaran teratas** (berdasarkan pengurutan kolom pertama, `id/tahun` di tabel **anggaran**):\n\n- Saya sudah mengeksekusi query: **SELECT * FROM anggaran ORDER BY 1 DESC LIMIT 5**\n- Hasilnya tersimpan di file: **query_results_95b412fd.csv** (bisa saya visualisasikan juga kalau Anda mau).",
    //         "markdown": true,
    //         "code_language": null,
    //         "font_size": null,
    //         "font_weight": null,
    //         "text_align": null
    //       }
    //     }
    //   ]
    // }
  ]);

  const abortRef = React.useRef(null)

  const chatMutation = useMutation({
    mutationFn: async (body) => {

      abortRef.current = new AbortController()

      const assistantId = crypto.randomUUID()

      // create empty assistant message
      setMessages(prev => [
        ...prev,
        {
          id: assistantId,
          role: 'assistant',
          blocks: [],
        },
      ])

      await chatService.sendChat({
        ...body,

        signal: abortRef.current.signal,

        onChunk: (chunk) => {

          console.log(chunk)

          const rich = chunk.rich

          if (!rich) return

          setMessages(prev => {
            return prev.map(msg => {

              if (msg.id !== assistantId) {
                return msg
              }

              return {
                ...msg,
                blocks: [
                  ...msg.blocks,
                  rich,
                ],
              }
            })
          })
        },
      })
    },
    onError: (err) => {
      console.error(err)
    },
  })

  useEffect(() => {
    console.log("messages", messages)
  }, [messages])

  const handleSubmit = (message) => {

    const userMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      message,
    }

    setMessages(prev => [
      ...prev,
      userMessage,
    ])

    chatMutation.mutate({
      message,
      conversation_id: null,
    })
  }

  return (
    <div style={{ display: 'flex', width: '100%', backgroundColor: '#f8fafc', overflow: 'hidden', height: '100%' }}>

      {/* Center Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>

        {/* Chat Content */}
        <div style={{ flex: 1, padding: '32px 60px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '140px' }}>

          <div style={{ transition: 'all 0.3s ease', textAlign: 'center', color: '#64748b', fontSize: '14px', marginTop: messages.length === 0 ? '200px' : '16px', marginBottom: '32px' }}>
            <p style={{ marginBottom: '8px', color: '#475569' }}>Tanyakan apapun mengenai data anggaran</p>
            <p style={{ maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>Gunakan kecerdasan buatan untuk menganalisis, memvisualisasikan, dan mendeteksi anomali dalam anggaran Anda secara real-time.</p>
          </div>

          {/* User Message */}
          {/* <div style={{ alignSelf: 'flex-end', backgroundColor: '#0a42a0', color: 'white', padding: '16px 20px', borderRadius: '16px 16px 0 16px', maxWidth: '60%', fontSize: '14px', lineHeight: 1.6, boxShadow: '0 4px 12px rgba(10, 66, 160, 0.15)' }}>
            Berikan saya rincian Anggaran Pendidikan 2024 dan bandingkan dengan tahun sebelumnya.
          </div> */}

          {/* AI Message */}
          {/* <div style={{ display: 'flex', gap: '16px', maxWidth: '85%' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#00f6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '12px', boxShadow: '0 0 10px rgba(0, 246, 255, 0.5)' }}>
              <Icon icon="ph:sparkle-fill" style={{ color: '#0a42a0', fontSize: '16px' }} />
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px 16px 16px 0', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', width: '100%' }}>
              <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, marginBottom: '24px' }}>
                Tentu. Berikut adalah analisis mendalam mengenai Anggaran Pendidikan tahun 2024. Total pagu meningkat sebesar 7.2% dibandingkan tahun 2023, dengan fokus utama pada pemulihan infrastruktur sekolah dasar di daerah tertinggal.
              </p>

              <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #f1f5f9' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', backgroundColor: '#f8fafc' }}>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Kategori Program</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Pagu 2024 (T)</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Pertumbuhan</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 16px', color: '#0f172a', fontWeight: 500 }}>Beasiswa Nasional</td>
                      <td style={{ padding: '14px 16px', color: '#475569', fontFamily: 'monospace' }}>Rp 124.5</td>
                      <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 600 }}>+12.4%</td>
                      <td style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span> <span style={{ color: '#334155' }}>Optimal</span>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 16px', color: '#0f172a', fontWeight: 500 }}>Gaji Tenaga Pendidik</td>
                      <td style={{ padding: '14px 16px', color: '#475569', fontFamily: 'monospace' }}>Rp 289.2</td>
                      <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 600 }}>+4.1%</td>
                      <td style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span> <span style={{ color: '#334155' }}>Stabil</span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', color: '#0f172a', fontWeight: 500 }}>Infrastruktur Sekolah</td>
                      <td style={{ padding: '14px 16px', color: '#475569', fontFamily: 'monospace' }}>Rp 88.7</td>
                      <td style={{ padding: '14px 16px', color: '#e11d48', fontWeight: 600 }}>-2.3%</td>
                      <td style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e11d48' }}></span> <span style={{ color: '#334155' }}>Review</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <div style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0', fontSize: '13px', color: '#475569', cursor: 'pointer', backgroundColor: '#f8fafc', transition: 'all 0.2s' }}>Cari anggaran terbesar</div>
                <div style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0', fontSize: '13px', color: '#475569', cursor: 'pointer', backgroundColor: '#f8fafc', transition: 'all 0.2s' }}>Bandingkan realisasi vs target</div>
              </div>

              <div style={{ display: 'flex', gap: '16px', height: '180px' }}>
                <div style={{ flex: 1, backgroundColor: '#f8fafc', borderRadius: '12px', padding: '16px', position: 'relative', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginBottom: '8px' }}>Trend anggaran 5 tahun</div>
                  <div style={{ height: '130px', width: '100%' }}>
                    <ResponsiveBar
                      data={[
                        { year: '2020', value: 80 },
                        { year: '2021', value: 85 },
                        { year: '2022', value: 95 },
                        { year: '2023', value: 105 },
                        { year: '2024', value: 124 },
                      ]}
                      keys={['value']}
                      indexBy="year"
                      margin={{ top: 10, right: 10, bottom: 24, left: 10 }}
                      padding={0.3}
                      colors="#0a42a0"
                      borderRadius={4}
                      enableGridY={false}
                      axisLeft={null}
                      axisBottom={{
                        tickSize: 0,
                        tickPadding: 8,
                        rotation: 0,
                      }}
                      theme={{
                        axis: { ticks: { text: { fontSize: 10, fill: '#64748b', fontWeight: 600 } } }
                      }}
                      enableLabel={false}
                    />
                  </div>
                </div>
                <div style={{ flex: 1, backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid #dcfce7' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 600, marginBottom: '12px', fontSize: '13px' }}>
                    <Icon icon="mingcute:bulb-fill" style={{ fontSize: '18px' }} /> Insight Analisis
                  </div>
                  <p style={{ fontSize: '13px', color: '#065f46', lineHeight: 1.6 }}>
                    Serapan anggaran beasiswa mencapai 98% di Semester I. Fokuskan percepatan untuk infrastruktur yang perlu ditinjau ulang.
                  </p>
                </div>
              </div>

            </div>
          </div> */}
          {
            messages.map((message, index) => {
              if (message.role == 'user') {
                return (
                  <div key={message.id || index} style={{ alignSelf: 'flex-end', backgroundColor: '#0a42a0', color: 'white', padding: '16px 20px', borderRadius: '16px 16px 0 16px', maxWidth: '60%', fontSize: '14px', lineHeight: 1.6, boxShadow: '0 4px 12px rgba(10, 66, 160, 0.15)' }}>
                    {message.message}
                  </div>
                )
              }

              if (message.role == 'assistant') {
                return (
                  <div key={message.id || index} style={{ display: 'flex', gap: '16px', maxWidth: '95%' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#00f6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '12px', boxShadow: '0 0 10px rgba(0, 246, 255, 0.5)' }}>
                      <Icon icon="ph:sparkle-fill" style={{ color: '#0a42a0', fontSize: '16px' }} />
                    </div>

                    <div style={{ backgroundColor: '#ffffff', borderRadius: '16px 16px 16px 0', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'auto', minWidth: 0 }}>
                      {
                        message.blocks && message.blocks.map((block, bIndex) => {
                          if (block.type === 'status_bar_update') {
                            const { status, message: statusMsg, detail } = block.data;
                            return (
                              <div key={block.id || bIndex} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', backgroundColor: '#f8fafc', borderRadius: '10px', fontSize: '13px', color: '#64748b', border: '1px solid #f1f5f9' }}>
                                {status === 'working' ? <Icon icon="eos-icons:loading" style={{ color: '#0a42a0' }} /> : <Icon icon="mingcute:check-circle-line" style={{ color: '#059669' }} />}
                                <span style={{ fontWeight: 500 }}>{statusMsg}</span>
                                {detail && <span style={{ color: '#94a3b8', fontSize: '12px' }}>— {detail}</span>}
                              </div>
                            )
                          }

                          if (block.type === 'task_tracker_update') {
                            const { operation, task, detail, status: taskStatus } = block.data;
                            const currentTask = task || { title: detail || 'Task update' };
                            const status = taskStatus || (task ? task.status : 'completed');

                            return (
                              <div key={block.id || bIndex} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 8px', fontSize: '13px', color: '#475569' }}>
                                <div style={{ width: '20px', display: 'flex', justifyContent: 'center' }}>
                                  {status === 'in_progress' ? <Icon icon="eos-icons:loading" /> :
                                    status === 'completed' ? <Icon icon="mingcute:check-circle-line" style={{ color: '#059669' }} /> :
                                      <Icon icon="mingcute:time-line" style={{ color: '#94a3b8' }} />}
                                </div>
                                <span style={{ fontWeight: 500 }}>{currentTask.title}</span>
                                {detail && operation === 'update_task' && <span style={{ color: '#94a3b8', fontSize: '12px' }}>({detail})</span>}
                              </div>
                            )
                          }

                          if (block.type === 'chart') {
                            return (
                              <div key={block.id || bIndex} >
                                <PlotlyChart
                                  data={block.data.data}
                                  layout={block.data.layout}
                                  id={block.id}
                                />
                              </div>
                            )
                          }

                          if (block.type === 'dataframe') {
                            return <DataFrameBlock key={block.id || bIndex} block={block} bIndex={bIndex} />
                          }

                          if (block.type === 'text' || block.type === 'markdown') {
                            return (
                              // <div key={block.id || bIndex} style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6 }}>
                              //   {block.data.content || block.data.text || block.data}
                              // </div>
                              <div className='markdown-content' key={block.id || bIndex} >
                                <Markdown>
                                  {block.data.content || block.data.text || block.data}
                                </Markdown>
                              </div>
                            )
                          }

                          return null;
                        })
                      }
                    </div>
                  </div>
                )
              }
            })
          }
        </div>

        {/* Input Box */}

        <div
          style={{
            position: 'absolute',
            bottom: messages.length == 0 ? "50%" : '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 120px)',
            maxWidth: '850px',
            zIndex: 20,
            transition: 'all 0.3s ease'
          }}
        >
          <Card
            size='small'
            styles={{
              body: {
                padding: '4px 8px'
              },
            }}
            style={{
              borderRadius: 21,
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
            }}
          >
            <Flex align='center' gap={10} >
              <Input.TextArea
                rows={1}
                autoSize
                size='large'
                placeholder='Ketik sesuatu'
                styles={{
                  textarea: {
                    // padding: 0,
                    border: 0,
                    outlineStyle: 0,
                    boxShadow: 0
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSubmit(e.target.value)
                  }
                }}
              />
              <Button
                type="primary"
                shape='circle'
                icon={<Icon icon="mingcute:send-plane-fill" style={{ fontSize: '21px' }} />}
                style={{ marginRight: 10, height: 38, width: 38 }}
              />
            </Flex>
          </Card>
        </div>
      </div>

      {/* Right Sidebar */}
      <div style={{ width: '340px', backgroundColor: '#ffffff', borderLeft: '1px solid #f1f5f9', padding: 24, overflowY: 'auto', overflowX: 'hidden', zIndex: 10, height: '100%' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: '#0f172a', fontWeight: 600, fontSize: '16px' }}>
          <Icon icon="ph:chart-line-up" style={{ color: '#0ea5e9', fontSize: '20px' }} /> AI Insights Summary
        </div>

        {/* 2x2 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
          <div style={{ borderLeft: '4px solid #0a42a0', backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #f8fafc' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 500 }}>Total Pagu</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Rp 2.400T</div>
          </div>
          <div style={{ borderLeft: '4px solid #14b8a6', backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #f8fafc' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 500 }}>Realisasi</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Rp 1.100T</div>
          </div>
          <div style={{ borderLeft: '4px solid #b45309', backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #f8fafc' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 500 }}>Sisa Anggaran</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Rp 1.300T</div>
          </div>
          <div style={{ borderLeft: '4px solid #06b6d4', backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #f8fafc' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 500 }}>Serapan</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>45.8%</div>
          </div>
        </div>

        <div style={{ fontSize: '14px', color: '#475569', fontWeight: 600, marginBottom: '20px' }}>Distribusi Sektor</div>
        <div style={{ height: '180px', width: '100%', marginBottom: '20px' }}>
          <ResponsivePie
            data={[
              { id: 'Pendidikan', value: 20, color: '#0a42a0' },
              { id: 'Kesehatan', value: 15, color: '#b45309' },
              { id: 'Lainnya', value: 65, color: '#5e24f1ff' }
            ]}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            innerRadius={0.75}
            padAngle={2}
            cornerRadius={4}
            activeOuterRadiusOffset={8}
            colors={{ datum: 'data.color' }}
            enableArcLinkLabels={false}
            enableArcLabels={false}
            isInteractive={true}
            layers={['arcs', ({ centerX, centerY }) => (
              <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontSize: '16px', fontWeight: 700, fill: '#0f172a' }}
              >
                2024
              </text>
            )]}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569', fontWeight: 500 }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0a42a0' }}></div> Pendidikan
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>20%</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569', fontWeight: 500 }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#b45309' }}></div> Kesehatan
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>15%</div>
          </div>
        </div>

        {/* Anomaly Detected Alert */}
        <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '12px', padding: '16px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e11d48', fontWeight: 600, fontSize: '13px', marginBottom: '8px' }}>
            <Icon icon="mingcute:alert-octagon-fill" style={{ fontSize: '18px' }} /> Anomaly Detected
          </div>
          <div style={{ color: '#be123c', fontSize: '12px', lineHeight: 1.6 }}>
            Ditemukan lonjakan belanja alat tulis di Satker Wilayah X sebesar 400% dari periode sebelumnya.
          </div>
        </div>

        <div style={{ fontSize: '14px', color: '#475569', fontWeight: 600, marginBottom: '16px' }}>Top Spending Entity</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '12px', backgroundColor: '#f8fafc', marginBottom: '32px', border: '1px solid #f1f5f9' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon="mingcute:building-3-line" style={{ color: '#0a42a0', fontSize: '20px' }} />
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>Kementrian PUPR</div>
            <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace' }}>Rp 146.7 Triliun</div>
          </div>
        </div>

        {/* Chart Image Placeholder */}
        <div style={{ height: '140px', borderRadius: '16px', backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden', padding: '20px', display: 'flex', alignItems: 'flex-end', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.8, background: 'linear-gradient(45deg, #0a42a0, #082f49)' }}></div>
          {/* Simple abstract line illustration */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }} viewBox="0 0 200 100" preserveAspectRatio="none">
            <path d="M0,80 Q25,30 50,70 T100,40 T150,60 T200,20 L200,100 L0,100 Z" fill="rgba(0, 246, 255, 0.1)" />
            <path d="M0,80 Q25,30 50,70 T100,40 T150,60 T200,20" fill="none" stroke="#00f6ff" strokeWidth="1" />
            <circle cx="50" cy="70" r="2" fill="#00f6ff" />
            <circle cx="100" cy="40" r="2" fill="#00f6ff" />
            <circle cx="150" cy="60" r="2" fill="#00f6ff" />
          </svg>
          <div style={{ fontSize: '11px', color: '#e2e8f0', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon icon="mingcute:check-circle-line" /> Data Verified by FinAI
          </div>
        </div>
      </div>

    </div>
  );
}
